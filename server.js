let http = require('http');

let port = process.env.PORT || process.argv[0] || 3000;

let server = http.createServer(function (req, res) {

        res.end('hello');

    });

server.listen(port);
