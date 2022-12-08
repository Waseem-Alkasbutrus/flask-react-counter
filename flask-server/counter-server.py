from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/count/dec', methods=['POST'])
def decrement():
    newCount = getCount() - 1
    write(newCount)

    return '%s' % toJSON(newCount)

@app.route('/count/inc', methods=['POST'])
def increment():
    newCount = getCount() + 1
    write(newCount)

    return '%s' % toJSON(newCount)

@app.route('/count/reset', methods=['POST'])
def reset():
    write(0)

    return '%s' % toJSON(0)

@app.route('/count/set', methods=['POST'])
def set():
    write(request.args["newValue"])
    return '%s' % toJSON(request.args["newValue"])

@app.route('/count', methods=['GET', 'POST'])
def count():
    return '%s' % toJSON(getCount())

def getCount():
    file = open("./count.txt", "r")
    count = file.readline()
    file.close()

    if not count.isnumeric() or count is "":
        count = 0
        write(0)

    return int(count)

def toJSON(num):
    return "{\"Count\": \"%s\"}" % num

def write(newCount):
    if type(newCount) == int:
        file = open("./count.txt", "w")
        file.write(str(newCount))
        file.close()

if __name__ == "__main__":
    app.run(debug=True)
