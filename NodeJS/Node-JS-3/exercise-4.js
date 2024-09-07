// Exercise 4:
// Write the code in nodejs to create a web server for a static website which has many
// .html files. Do not hardcode the routes.

// In the root folder of your nodejs project, create a folder called ‘public’ and put all your
// html files(static website files) inside it. And make all the .html files accessible from
// the browser.
// Reference: app.use(express.static('public'))
// Example:
// http://localhost/about.html,
// http://localhost/contact.html,
// http://localhost/home.html etc..



// use "npm install express" to download the package.json file to run express
// if express is not listed in the dependencies section of the package.json file, use "npm init -y"

const express = require('express');
const path = require('path');

const app = express();

const PORT = 8080;


app.use(express.static(path.join(__dirname, 'public')));
    
    
app.use((req, res, next) => {
    res.status(404).send ("404 Not Found.");
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:8080`);
});
