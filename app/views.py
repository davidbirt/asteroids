from flask import render_template
from app import app
from flask import json
from flask import request


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html',title='welcome to daves python app. ')

@app.route('/test1')
def getit():
    return app.send_static_file('dbgame/views/index.html')

@app.route('/controllers')
def getControllerView():
    return app.send_static_file('dbgame/views/controller.html')

@app.route('/directives')
def getDirectiveView():
    return app.send_static_file('dbgame/views/directive.html')

@app.route('/file')
def getD():
    return app.send_static_file('dbgame/views/directive.html')

@app.route('/asset', methods=['POST'])
def message():
    return app.send_static_file('' + request.json['file'])
