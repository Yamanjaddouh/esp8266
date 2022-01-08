from time import time_ns
from flask import Flask, request ,render_template,url_for

app = Flask(__name__)
start_time = time_ns()


x=0
mac_address  = "00:00:00:00:00:00"
@app.route('/', methods = ["GET"])
def post():
    global x
    return render_template('index.html')
@app.route('/send-State' , methods = ["POST"])
def get_state():
    global mac_address,start_time
    mac_address= request.data.decode()
    print(request.data.decode())
    start_time = time_ns()
    return ''

@app.route('/send-Data' , methods = ["POST"])
def get():
    global x 
    x= request.data.decode()
    print(request.data.decode())
    return ''
        
@app.route('/get-Data')
def send():
    global x
    return x
@app.route('/get-State')
def send_state():
    global mac_address
    eltime = (time_ns() -start_time)/1e9
    return "{},{}".format(mac_address,int(eltime))



if __name__=="__main__":    
    # # app.run(host='0.0.0.0', port= 8080)
    # website_url = 'yaman-jaddouh.com'
    # app.config['SERVER_NAME'] = "yaman-local:8080"
    # website_url = 'yamanjaddouh:8080'
    # app.config['SERVER_NAME'] = website_url
    app.run()
    # app.run(host='0.0.0.0')