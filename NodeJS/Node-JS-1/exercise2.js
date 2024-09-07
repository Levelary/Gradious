// Exercise 2:
// Create 100 random words with 10 characters each consisting of Alphanumerics and
// write it into a file called random-words.txt. Each line should have only one word.
const fs = require("fs");

function generateRandomWord(length)
{
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let word = "";

    for(let i=0;i<length;i++)
        word += chars.charAt(Math.floor(Math.random() * chars.length));

    return word;
};



/* Main */
const words = [];
const filePath = "lib/random-words.txt";
const wordCount = 100;
const charCount = 10;

for(let i=0;i<wordCount;i++)
{
    words.push(generateRandomWord(charCount));
}

fs.writeFile(filePath, words.join('\n'), (err) => {

    if(err) throw err;

    console.log(`Successfully created 100 random words with 10 characters each in ${filePath}`);
});

