const readFile = require('./mymodule');
const pathname = process.argv[2];
const extension = process.argv[3];


readFile(pathname, extension, (err, list) => {
    if (err) {
        return console.error('Something went wrong: ', err)
    }
    console.log(list.join("\n"));
});
