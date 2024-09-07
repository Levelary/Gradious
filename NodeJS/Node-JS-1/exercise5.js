// Exercise 5:
// Read the text file which contains the data in the format of "Name | age | gender | city"
// in every line. Construct the JSON out of it and print the JSON.


const fs = require('fs');

function convertToJSON(file)
{
    try 
    {
        const data = fs.readFileSync(file, 'utf8');

        const lines = data.trim().split('\n');
        const headers = lines[0].split('|').map(header => header.trim());

        const jsonList = lines.slice(1).map(line => {
            const values = line.split(' | ').map(value => value.trim());

            const jsonObj = {};

            headers.forEach((header, index) => {
                jsonObj[header] = values[index];
            });
            return jsonObj;
        });

        console.log(JSON.stringify(jsonList, null, 2));
    }
    catch(error)
    {
        console.error(`Error: ${error.message}`);
    }
};

convertToJSON("lib/details.txt");