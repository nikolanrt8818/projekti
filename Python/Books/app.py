from flask import Flask, render_template, request,flash
from flask.helpers import url_for
from flask_mysqldb import MySQL
from werkzeug.utils import redirect

app = Flask(__name__)
app.secret_key='12345'

#?database setup
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'books'
mysql = MySQL(app)

@app.route('/', methods=['GET'])
def index():

    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        cursor.execute('''SELECT name, author, year, publisher FROM book''')
        mysql.connection.commit()
        books = cursor.fetchall()
        print(books)
        cursor.close()

    return render_template('index.jinja', results=books)

@app.route('/addBook', methods=['GET', 'POST'])
def addBook():

    if request.method == 'POST':
        name = request.form['name']
        author = request.form['author']
        year = request.form['year']
        publisher = request.form['publisher']
        cursor = mysql.connection.cursor()
        cursor.execute(''' INSERT INTO book(name, author, year, publisher) VALUES(%s, %s, %s, %s)''', (name, author, int(year) , publisher))
        mysql.connection.commit()
        cursor.close()
        flash(f'You have successfully added {name} by {author}.', category='success')
        return redirect(url_for('index'))

    return render_template('addBook.jinja')

@app.route('/deleteBook', methods=['GET', 'POST'])
def deleteBook():

    if request.method == 'POST':
        name = request.form['name']
        author = request.form['author']
        cursor = mysql.connection.cursor()
        cursor.execute(''' DELETE FROM book WHERE name=%s and author=%s''', (name, author))
        mysql.connection.commit()
        cursor.close()
        flash(f'You have successfully deleted {name} book.', category='success')
        return redirect(url_for('index'))

    return render_template('deleteBook.jinja')

@app.route('/editBook', methods=['GET', 'POST'])
def editBook():

    if request.method == 'POST':
        name = request.form['name']
        cursor = mysql.connection.cursor()
        cursor.execute('''SELECT idBook FROM book WHERE name=%s''', [name])
        mysql.connection.commit()
        idBook = cursor.fetchone()
        if idBook == None:
            flash(f'Unfortunately, book {name} is not found.', category='warning')
            return redirect(url_for('index'))
        cursor.close()
        flash(f'{name} found.',category='success')
        return redirect(f'/editBook/{idBook[0]}')

    return render_template('editBook.jinja')


@app.route('/editBook/<int:idBook>', methods=['GET','POST'])
def edit(idBook):

    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        cursor.execute(''' SELECT name, author, year, publisher FROM book WHERE idBook=%s''', (int(idBook),))
        mysql.connection.commit()
        book = cursor.fetchall()
        cursor.close()

    if request.method == 'POST':
        name = request.form['name']
        author = request.form['author']
        year = request.form['year']
        publisher = request.form['publisher']
        cursor = mysql.connection.cursor()
        cursor.execute('''UPDATE book SET name=%s, author=%s, year=%s, publisher=%s WHERE idBook=%s''', (name, author, int(year) , publisher,int(idBook)))
        mysql.connection.commit()
        cursor.close()
        flash(f'You have successfully edited {name} by {author}.', category='success')
        return redirect(url_for('index'))


    return render_template('edit.jinja', results=book)


if __name__ == '__main__':
    app.run(debug=True)
    