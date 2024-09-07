// NodeJS Assignment 3 - Web Server

// <YOUR_FIRST_NAME>-NodeJS-Assignment2/

// package.json

// Exercise 1:
// Write the nodejs code to create a simple web server which is listening to the port
// number 8080. When we hit the url http://localhost:8080 in the browser, it should
// launch the index.html.


const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const filePath = path.join(__dirname, 'lib/index.html');

const server = http.createServer((req, res) => {
    if(req.url === '/')
    {
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
    }
    else
    {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("404 Not Found");
    }

});

server.listen(PORT, () => {
    console.log(`Server for index.html is running on http://localhost:8080`);
})