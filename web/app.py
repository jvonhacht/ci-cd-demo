from flask import Flask

app = Flask(__name__)
 
@app.route('/')
def hello_world():
    return '<h1> Hello there! <h1><p>hello</p>'
 
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')