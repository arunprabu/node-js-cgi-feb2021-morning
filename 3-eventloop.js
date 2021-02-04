const events = require('events'); // importing events module

// creating an object of EventEmitter
let eventEmitter = new events.EventEmitter();

eventEmitter.on('DATA_RECEIVED', function(){
  console.log('Data Received Successfully!');
});

// defining/ registering our own event
eventEmitter.on('OPEN_CONNECTION', function() {
  console.log('Connection opened Successfully!');

  eventEmitter.emit('DATA_RECEIVED');
});

// Trigger / emit the custom event -- OPEN_CONNECTION
eventEmitter.emit('OPEN_CONNECTION');

console.log('Program Ended');

