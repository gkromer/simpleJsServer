const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Welcome to my JS Server');
});

server.listen(PORT, () => {
    console.log('Server started on port '+ PORT);
})