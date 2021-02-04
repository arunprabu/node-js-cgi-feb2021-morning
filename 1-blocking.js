const fs = require('fs'); // importing file system module

// reading a file synchrously
// so it is a blocking I/O 
let data = fs.readFileSync('sample.txt');

// will be printed first
console.log(data.toString());

// will be printed at last as the program runs line by and char by char 
console.log('Program Ended');
