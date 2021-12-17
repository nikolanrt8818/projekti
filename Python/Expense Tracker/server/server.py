from flask import Flask, request
from flask_mysqldb import MySQL
from flask_cors import CORS
import json

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'tracker'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

@app.route('/expenses', methods=['GET'])
def index():
    global data
    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        cursor.execute(''' SELECT * FROM expenses ''')
        mysql.connection.commit()
        expenses = cursor.fetchall()
        cursor.close()
        with open('./static/exp.json', 'w') as file:
            json.dump(expenses, file, default=str)
        with open('./static/exp.json', 'r') as file:
            data = file.read()

    return data       
    


if __name__ == '__main__':
    app.run(debug=True)
