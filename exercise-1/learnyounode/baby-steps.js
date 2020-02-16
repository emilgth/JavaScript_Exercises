const arguments = process.argv.slice(2);

console.log(arguments.reduce((a, b) => a + parseInt(b), 0));
