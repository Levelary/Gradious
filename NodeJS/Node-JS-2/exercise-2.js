// Exercise 2:
// Read a binary file (any exe file) using fs.createReadStream() and write the chunks
// into a new file called gradious-assignment.exe


const fs = require('fs');
const path = require('path');

const srcFilePath = path.join(__dirname, 'lib/binary-file.exe');
const destFilePath = path.join(__dirname, 'lib/gradious-assignment.exe');


const readStream = fs.createReadStream(srcFilePath);

const writeStream = fs.createWriteStream(destFilePath);

readStream.pipe(writeStream);

writeStream.on('finish', () => { 
    console.log("File copied successfully");
});

writeStream.on('error', () => { 
    console.log("Error writing to file: ", err);
});

readStream.on('error', (err) => {
    console.log("Error reading to file: ", err);
});
