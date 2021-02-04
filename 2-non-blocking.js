const fs = require('fs');

// reading file async'ly 
// non blocking I/O
fs.readFile('sample.txt', function(err, data ){
  // once the file reading is over the following lines will be executed
  if(!err){
    console.log(data.toString());
  }else{
    console.log(err);
  }
});

// the following line will get executed first while fs is still reading the file
console.log('Program Ended');