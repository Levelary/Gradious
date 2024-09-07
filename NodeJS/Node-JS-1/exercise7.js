// Exercise 7:
// Read the Excel file (marks.xlsx) line by line and extract the data into JSON.
// Sample JSON: [{"name" : "Anand", "age":22, "gender":0, "city" : "Mumbai"}, {"name" :
// "Bihu", "age":17, "gender":1, "city" : "Pune"}])

// Step-1: npm install xlsx -> terminal

const xlsx = require('xlsx');
const fs = require('fs');


function excelToJson(filePath)
{
    const workbook = xlsx.readFile(filePath);

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    return jsonData;
}

const filePath = "lib/marks.xlsx";

const jsonData = excelToJson(filePath);

console.log(JSON.stringify(jsonData, null, 2));