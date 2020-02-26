const fs = require('fs');
const filepath = process.argv[2];
let document;

fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.split('\n').length - 1);
});
