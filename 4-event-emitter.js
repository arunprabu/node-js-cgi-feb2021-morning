const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('OPEN_CONNECTION', function(err, data){
  if(!err){
    console.log(data);
  }else{
    console.log(err);
  }
  
});

// passing data to the custom event
eventEmitter.emit('OPEN_CONNECTION', null, 'Connection Opened');

