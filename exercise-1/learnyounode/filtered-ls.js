const fs = require('fs');
const path = require('path');
const filepath = process.argv[2];
const extension = "." + process.argv[3];

fs.readdir(filepath, function (err, data) {
    if (err) throw err;
    let list = data.filter(file => {
        return path.extname(file) === extension;
    }).join("\n");
    console.log(list);
});
