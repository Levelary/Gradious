// Exercise 1:
// Write a nodejs app listening to the port number 8080 and when we hit
// http://localhost:8080 in the browser, it should read the larger text file (say 100 MB)
// using fs.createReadStream() and send the stream as the response to the client.


// mkdir nodeJS-ReadStream-app ("Node-JS-2" in this case)
// cd nodeJS-ReadStream-app (to change to current directory)
// npm init -y (install package.json)
// npm install (installs package-lock.json to improve consistancy and reproducability)

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const filePath = path.join(__dirname, 'lib/large-text-file.txt');

const server = http.createServer((req,res) => {
    if(req.url === '/')
    {
        const readStream = fs.createReadStream(filePath, 'utf-8');

        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Transfer-Encoding': 'chunked'
        });

        readStream.on('open', () => { 
            readStream.pipe(res);
        });

        readStream.on('error', (err) => {
            res.end(err);
        });
    }
    else
    {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("404 Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:8080`);
})