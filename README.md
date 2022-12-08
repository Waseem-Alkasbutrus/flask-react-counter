# Counter App
![](https://img.shields.io/badge/React.JS-20232A?style=for-the-badge&logo=react)
![](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask)
![](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python)
![](https://img.shields.io/badge/JavaScript-4D4D4D?style=for-the-badge&logo=javascript)

<img src="https://github.com/Waseem-Alkasbutrus/flask-react-counter/blob/master/Counter.png?raw=true"/>

#### Pre-requisites
- npm
- react.js
- python
- flask
- git

<br>

#### Local Host
clone this repository to your computer
``` bash 
git clone https://github.com/Waseem-Alkasbutrus/flask-react-counter.git
cd flask-react-counter/
```

start Flask server
``` bash
cd flask-server/
python3 counter-server.py
```

open another terminal instance, then start the React client
``` bash
cd react-client
npm start
```
a browser tab pointed to [``http://localhost:3000/``](http://localhost:3000/) will automatically open
<br>

If  you want to manually edit the count, you can do so by overriding the value in [``flask-server>count.txt``](https://github.com/Waseem-Alkasbutrus/flask-react-counter/blob/master/flask-server/count.txt)
