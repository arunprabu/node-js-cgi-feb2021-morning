// 1. Write a file with some random text async'ly 
// 2. Upon successful file writing, Read the same file async'ly 

const fs = require('fs');

let randomTxt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Praesent scelerisque gravida est. 
Nulla semper augue nibh, ultrices dictum est posuere eget.`; 

fs.writeFile('random.txt', randomTxt, (err) => {
  if(!err){
    console.log('File writing is over... Reading Started!');
    fs.readFile('random.txt', (_err, data ) => {
      if(!_err){
        console.log('File Reading is over! and the content of the file is the following');
        console.log(data.toString());
      }else{
        console.log(err);
      }
    });
    
  }

});


