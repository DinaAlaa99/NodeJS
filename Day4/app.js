const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");
const pathsync = require("path");

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use('/static', express.static("static"));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './views/home.html'));
})


app.post('/signup', function (req, res) {
    obj = req.body;
    
    let dataJSON = fs.readFileSync(path.resolve(__dirname, './users.txt'));
    let data = JSON.parse(dataJSON);
   
    if (data.email === obj.email) { 
        res.send('<html><head></head><body><h1>user already exist</h1></body></html>')
    } else {
        fs.writeFileSync(pathsync.resolve(__dirname, './users.txt'), JSON.stringify(req.body))
        res.sendFile(path.join(__dirname, './views/signup.html'));
    }
});

app.post("/login", (req, res) => {
    obj = req.body;
    
    let dataJSON = fs.readFileSync(path.resolve(__dirname, 'users.txt'));
    let data = JSON.parse(dataJSON);
    
    if (obj.email != data.email) {
        res.send('<html><head></head><body><h1>Wrong Email</h1></body></html>');
    } else if (obj.password != data.password) {
        res.send('<html><head></head><body><h1>Wrong Password</h1></body></html>');
    } else {
        res.sendFile(path.join(__dirname, './views/login.html'));
    }
})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/views/error.html');
})
app.post('*', function (req, res) {
    res.sendFile(__dirname + '/views/error.html');
})
app.listen(3000)