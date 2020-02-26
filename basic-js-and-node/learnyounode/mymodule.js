const fs = require('fs');
const path = require('path');

module.exports = function (filepath, extension, callback) {
    fs.readdir(filepath, function (err, data) {
        if (err) return callback(err);
        data = data.filter(file => {
            return path.extname(file) === "." + extension;
        });
        callback(null, data);
    });
};

