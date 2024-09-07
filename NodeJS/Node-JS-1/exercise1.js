// Exercise 1:
// Please create 3 files called lib/readme.txt, lib/students.csv, and lib/index.html with
// some content in them. Write a function called getFileContent(file). It should accept
// the filename and return the file content.
// Call the function 3 times with the above-mentioned files and display the content in
// the console.log.
// getFileContent(‘readme.txt’);
// getFileContent(‘students.csv’);
// getFileContent(‘index.html’);

const fs = require('fs');

function getFileContent(file)
{
    fs.readFile(file, 'utf-8', (err, input) => {

        if (err) throw err;

        console.log(input);
    });
}

getFileContent('lib/readme.txt')
getFileContent('lib/students.csv');
getFileContent('lib/index.html');