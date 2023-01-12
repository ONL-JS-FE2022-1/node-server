const http = require('http');

const PORT = 3000;

const requestListener = (req, res) => {
    // console.log('REQUEST IS HERE')
    // const {url, method} = req;
    // console.log(url, method);
    res.statusCode = 404;
    res.end('HELLO FROM SERVER');
}

const server = http.createServer(requestListener);

server.listen(PORT);