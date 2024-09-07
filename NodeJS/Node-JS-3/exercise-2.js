// Exercise 2:
// Create a simple web server in NodeJS which is listening to port number 8080 and we hit
// the url http://localhost in the browser, it should read the text file (users.txt) and
// convert it in to a table format in HTML and return the same to the client. In this case,
// you will be sending the content-type as HTML from the server.


const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const server = http.createServer((req, res) => {
    if(req.url == '/')
    {
        fs.readFile(path.join(__dirname, 'lib/users.txt'), (err, data) => {
            if(err)
            {
                res.writeHead(500, {'Content-type': 'text/plain'});
                res.end(err)
                return;
            }

            const rows = data.toString().trim().split('\n');

            let html_content = `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Document</title>
                            <style>
                                table { 
                                    width: 100%; 
                                    border-collapse: collapse;
                                }
                                th, td { 
                                    border: 1px solid black; 
                                    padding: 8px;
                                    text-align: center;
                                }
                                tr:nth-child(odd) {
                                    background-color: #f2f2f2;
                                }
                            </style>
                        </head>
                        <body>
                            <table>`
            
            const head = rows[0].split('|').map(item => item.trim());
                html_content += `
                                <tr>
                                    <th>${head[0]}</th>
                                    <th>${head[1]}</th>
                                    <th>${head[2]}</th>
                                    <th>${head[3]}</th>
                                </tr>`

            rows.slice(1).forEach(row => {
                const[Name, Age, Gender, City] = row.split('|').map(item => item.trim());
                html_content += `
                                <tr>
                                    <td>${Name}</td>
                                    <td>${Age}</td>
                                    <td>${Gender}</td>
                                    <td>${City}</td>
                                </tr>`
            });
                
            html_content += `</table>
                        </body>
                        </html>`

            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(html_content);
        });
    }
    else
    {
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.end("Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`The server is running on http://localhost:8080`);
});









// Response:
// <table>
// <tr>
// <th>Name</th>
// <th>Age</th>
// <th>Gender</th>
// <th>City</th>
// </tr>
// <tr>
// <td>Abhi</td>
// <td>25</td>
// <td>Male</td>
// <td>Hyderabad</td>
// </tr>
// <tr>
// <td>Babu</td>
// <td>21</td>
// <td>Male</td>
// <td>Vizag</td>
// </tr>
// <tr>
// <td>Chitra</td>
// <td>25</td>
// <td>Female</td>
// <td>Vijayawada</td>
// </tr>
// </table>
