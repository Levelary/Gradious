// Exercise 8:
// Read the JSON and write the data into the Excel sheet
// Sample JSON: [{"name" : "Anand", "age":22, "gender":0, "city" : "Mumbai"}, {"name" :
// "Bihu", "age":17, "gender":1, "city" : "Pune"}])

fs = require('fs');
xlsx = require('xlsx');

const jsonData = [
    {
        "name": "Rocky",
        "age": "18",
        "gender": "Male",
        "city": "Hyderabad"
    },
    {
        "name": "Manish",
        "age": "19",
        "gender": "Male",
        "city":"Kolkata"
    },
    {
        "name": "Radha",
        "age": "17",
        "gender": "Female",
        "city": "Chennai"
    },
    {
        "name": "Lasya",
        "age": "19",
        "gender": "Female",
        "city": "Mumbai"
    }
];


function jsonToExcel(jsonData, outputPath)
{
    const worksheet = xlsx.utils.json_to_sheet(jsonData);

    const workbook = xlsx.utils.book_new();

    xlsx.utils.book_append_sheet(workbook, worksheet, 'sheet1');

    xlsx.writeFile(workbook, outputPath);
}

const outputPath = 'lib/xlSheet.xlsx';

jsonToExcel(jsonData, outputPath);

console.log(`The JSON data has been written to the filepath: ${outputPath}`);