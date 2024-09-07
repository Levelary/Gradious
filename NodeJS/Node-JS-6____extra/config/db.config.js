// The database connection is configured here

// npm install mysql

const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // mysql username here
    password: 'bharath', // mysql password here
    database: 'carddb'
});

connection.connect(error => {
    if(error)
    {
        console.log("Error connecting to db", err);
        return;
    }
    console.log("Connected to the db");
});

module.exports = connection;