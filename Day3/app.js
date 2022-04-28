const http = require('http') 
const fs = require('fs') 
const pathsync = require("path")

http.createServer(function (req, res) {
    
    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, {
            'content-type': "text/html"
        })
        var html = fs.readFileSync('./views/home.html')
        res.write(html)
    }

    else if (req.url === '/signup' && req.method === 'POST') {
        req.on('data', obj => {
            body += obj
            let dataJSON = fs.readFileSync(pathsync.resolve(__dirname, 'users.txt'));
            let data = JSON.parse(dataJSON);
            
            if (data.email === obj.email) { 
                res.send('<html><head></head><body><h1>user already exist</h1></body></html>')
                
            } else { 
                res.writeHead(200, {
                    'content-type': "application/json"
                })
                fs.writeFileSync(pathsync.resolve(__dirname, './users.txt'), obj);
                res.end();
            }

        })
    }
        
    else if (req.url === '/login' && req.method === 'POST') {
        var body = " "
        req.on('data', obj => {
            body += obj
            let bodyParsed = JSON.parse(body) 
            let dataJSON = fs.readFileSync(pathsync.resolve(__dirname, 'users.txt'));
            let data = JSON.parse(dataJSON);
            
            if (bodyParsed.email != data.email) {
                res.send('<html><head></head><body><h1>Wrong Email</h1></body></html>');
            } else if (bodyParsed.password != data.password) {
                res.send('<html><head></head><body><h1>Wrong Password</h1></body></html>');
            } else {
                res.writeHead(200, {
                    'content-type': "application/json"
                })
                message = bodyJSON.name;
            }
            res.writeHead(200, {
                'content-type': "text/html"
            })
            var html = fs.readFileSync('../views/login.html', 'utf8');
            html = html.replace('{message}', message);
            res.end()
        })
    }
    else {
        res.writeHead(404)
        res.write('page is not found');
    }
    res.end()
    
}).listen(3000)
