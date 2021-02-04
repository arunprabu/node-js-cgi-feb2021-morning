const fs = require('fs');

let writableText = 'My first file writing example in NodeJS';

// file writing begins
fs.writeFile('dummy.txt', writableText, function(err) {
  if(!err){
    console.log('File writing is over!');
  }else{
    console.log(err);
  }
});

console.log('Program Ended');