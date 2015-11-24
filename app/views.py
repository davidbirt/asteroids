from flask import render_template
from app import app


@app.route('/')
@app.route('/index')
def index():
    user = {'nickname': 'Miguel'}  # fake user
    return render_template('index.html',user=user, title='your mom')

@app.route('/test1')
def getit():
    return app.send_static_file('dbgame/views/index.html')

@app.route('/controllers')
def getControllerView():
    return app.send_static_file('dbgame/views/controller.html')

@app.route('/directives')
def getDirectiveView():
    return app.send_static_file('dbgame/views/directive.html')
