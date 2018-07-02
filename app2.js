// console.log("node app2.js test");

// function greeting(greet) {
// 	console.log(greet);
// }

// greeting("Hello All");

const http = require('http'); // Include system core module
const hostname = '127.0.0.1'; // Loopback address
const port = 3000;            // Port to listen on
const fs = require('fs');     // Filesystem needed to get html file

// Pass in file and callback with results.
fs.readFile('index.html', (err, html) => {
	if(err) {
		throw err;
	}

	const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader('content-type', 'text/plain'); // Parses the html markup
		res.setHeader('content-type', 'text/html'); // Parses the html page
		res.write(html);
		res.end();
	});

	server.listen(port, hostname, () => {
		console.log('Server started on port ' + port);
	});
});

// npm init (creates the package.json file)
// npm install express --save (Installs module Express, all future installed modules will update dependencies in package.json including this module install)
// node app.js
// node app
// npm start (script defined in package.json -- node app2.js)