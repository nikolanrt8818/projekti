from flask import Flask
import sqlite3

app = Flask(__name__)


@app.route("/")
def main():
    connection = sqlite3.connect("todo.db")
    cursor = connection.cursor()
    # res = cursor.execute("SELECT name FROM Todos")
    # print(res.fetchall())
    return "hey"


if __name__ == "__main__":
    app.run(host="localhost", port=3001, debug=True)