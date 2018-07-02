// Basic server setup
const http = require('http'); // Include system core module
const hostname = '127.0.0.1'; // Loopback address
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('content-type', 'text/plain'); // Returns the response defined below
	res.end('Hello Everybody!!!');
});

server.listen(port, hostname, () => {
	console.log(`Server started on port ${port}`);
});

// npm init (creates the package.json file)
// node app.js
// node app

// Ctrl+C to stop server, restart on change  