//to read a text file and show content in console

const fs = require('fs');

fs.readFile('../../Hello.txt', (err, data) => {
    console.log(err||data.toString());
});