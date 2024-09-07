// Exercise 3:
// copyFile(fileName, newFile) - Create a function to copy a file. The function should
// accept 2 parameters source file & new file name.

const fs = require('fs');

function copyFile(oldFile, newFile)
{
    
    fs.copyFile(oldFile, newFile, (err) => {
        
        if(err) throw err;

        console.log(`Successfully copied contents from ${oldFile} to ${newFile}`)
    });


}

copyFile("lib/oldFile.txt", "lib/newFile.txt");