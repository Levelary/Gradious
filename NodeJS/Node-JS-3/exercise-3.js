// Exercise 3:
// Create a simple web server and create the routes for home.html, contact.html &
// about.html
// When we hit http://localhost/home - It should launch home.html
// When we hit http://localhost/about - It should launch about.html
// When we hit http://localhost/contact- It should launch contact.html


const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const server = http.createServer((req, res) => {
    let filePath = '';

    if(req.url === '/home')
        filePath = path.join(__dirname, 'lib/home.html');
    else if(req.url === '/about')
        filePath = path.join(__dirname, 'lib/about.html');
    else if(req.url === '/contact')
        filePath = path.join(__dirname, 'lib/contact.html');
    else
    {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("404 Not Found. Add extension to the URL to visit the pages.");
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if(err)
        {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(err);
            
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });

});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:8080`);
})