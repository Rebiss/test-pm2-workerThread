const cluster = require('cluster');
const http = require('http');
const bench = require('./bench');

const host = '0.0.0.0';
const port = 8011;

const router = function requestRouter(request, response) {
    bench(500);
    response.end(JSON.stringify('OK'));
}

const server = http.createServer(router);
server.listen(port, host, () => {
    console.log(`Server running on port: ${port}`);
})
