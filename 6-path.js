const path = require('path'); // importing path module

const fileName = __filename;
console.log(fileName); // filename will be with dir name and extension

const extn = path.extname(fileName);
console.log(extn); // prints the extn with .prefix

const baseName = path.basename(fileName);
console.log(baseName); // prints only the file name with extn