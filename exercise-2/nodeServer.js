const http = require('http');
const sysInfo = require('./systemInfo');
const DosDetector = require('./dosDetector');
const dosDetector = new DosDetector(500);
const server = http.createServer(((req, res) => {

    dosDetector.addUrl(req.url);

    if (req.url === '/api/os-info') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(sysInfo.sysInfo));
        return res.end();
    }

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>Simple node HTTP server demo </h2>
                            <p>Exposes this endpoint <code>/api/os-info</code></p>
                            `);
        return res.end();
    }
}));

server.on('connection', (socket => socket.remoteAddress));
server.listen(3000);
console.log('Listening on port 3000...');

