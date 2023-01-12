const http = require('http');
const fs = require('fs/promises'); 

const PORT = 3000;

const requestListener = (req, res) => {
    const {url} = req;

    if( url === '/index.html' ) {
        fs.readFile('./views/index.html', 'utf8')
        .then((data) => {
            res.end(data)
        })
    } else {
        res.statusCode = 404;
        fs.readFile('./views/error.html', 'utf8')
        .then((data) => {
            res.end(data)
        })
    }
}

const server = http.createServer(requestListener);

server.listen(PORT);