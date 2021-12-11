import json
from flask import Flask, request
from flask.helpers import url_for
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
from werkzeug.utils import redirect

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins":"*",
    }
})
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'todos'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

@app.route('/todos', methods=['GET', 'POST'])
def todos():
    global data
    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        cursor.execute(''' SELECT * FROM task''')
        mysql.connection.commit()
        tasks = cursor.fetchall()
        cursor.close()
        with open('./static/todos.json', 'w') as myfile:
            json.dump(tasks, myfile, default=str)
        with open('./static/todos.json', 'r') as myfile:
            data = myfile.read()
    if request.method == 'POST':
        values = request.get_json()
        task = values.get('task')
        date = values.get('date')
        print(values)
        print(task, date)
        cursor = mysql.connection.cursor()
        cursor.execute(''' INSERT INTO task(task,date) VALUES(%s,%s) ''', (task, date))
        mysql.connection.commit()
        cursor.close()
    return data

@app.route('/todos/delete', methods=['POST'])
def deleteItem():
    if request.method == 'POST':
        id = request.get_json()
        print(id)
        cursor = mysql.connection.cursor()
        cursor.execute(''' DELETE FROM task WHERE idtask = %s ''', [str(id)])
        mysql.connection.commit()
        cursor.close()
    return redirect(url_for('todos'))

if __name__ == "__main__":
    app.run(debug=True)
