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
    write(int(request.args["newValue"]))
    return '%s' % toJSON(getCount())

@app.route('/count', methods=['GET', 'POST'])
def count():
    return '%s' % toJSON(getCount())

def getCount():
    file = open("./count.txt", "r")
    count = file.readline()
    file.close()

    try:
        return int(count)
    except:
        print("count corrupted, resetting to 0")
        write(0)
        return 0

def toJSON(num):
    return "{\"Count\": \"%s\"}" % num

def write(newCount):
    try:
        file = open("./count.txt", "w")
        file.write(str(int(newCount)))
        file.close()
    except:
        print(newCount, "not an integer")

if __name__ == "__main__":
    app.run(debug=True)
