// Exercise 6:
// Hardcode the list of users in a JSON object and print each user's details line by line in
// a file called users-info.txt in this format: name | age | gender | city
// Sample JSON: [{"name" : "Anand", "age":22, "gender":0, "city" : "Mumbai"}, {"name" :
// "Bihu", "age":17, "gender":1, "city" : "Pune"}]


const fs = require('fs');

const usersJson = [
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


function genderFormat(genderVal)
{
    return genderVal === 0 ? 'Male' : 'Female';
}

function convertFromJSON(file, usersJson)
{
    const lines = usersJson.map(user => {

        return `${user.name} | ${user.age} | ${genderFormat(user.gender)} | ${user.city}`;

    }).join('\n');

    fs.writeFile(file, lines, (err) => {
        if(err)
        {
            console.error(`Error: ${err.message}`);
            return;
        }
        console.log(`User details written to ${file}`);
    });

};


const filePath = "lib/users-info.txt";
convertFromJSON(filePath, usersJson);