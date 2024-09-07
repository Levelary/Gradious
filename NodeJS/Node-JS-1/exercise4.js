// Exercise 4:
// Read the log file ‘debug.log’ and add a timestamp as the prefix of every line
// (14-Apr-2022 11:15:45 AM)

// const { time } = require('console');
const fs = require('fs');
const readline = require('readline');

function getTimestamp()
{
    const now = new Date();
    const specifications = { day: '2-digit', month: 'short', year: 'numeric',
                            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true};
    
    // const timestamp = new Intl.DateTimeFormat('en-GB', specifications).format(now); // Internationalization
    // return timestamp.replace(',', '');

    return now.toLocaleString('en-GB', specifications).replace(',', '');

}

const filePath = "lib/debug.log";
fs.readFile(filePath, 'utf-8', (err, data) => {

    if(err)
    {
        console.log(`Error: ${err.message}`);
        return;
    }
        
    const lines = data.split('\n');

    const newData = lines.map(line => `${getTimestamp()} ${line}`).join('\n');

    fs.writeFile(filePath, newData, 'utf-8', (err) => {
        if(err)
        {
            console.log(`Error: ${err.message}`);
            return;
        }
        console.log(`Timestamps have been added to each line of the file ${filePath}`);
    });

});