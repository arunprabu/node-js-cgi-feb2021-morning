const fs = require("fs");
const events = require("events");

let eventEmitter = new events.EventEmitter();

let fileName = "sample123.txt";
let context = "Sample Data for file";

eventEmitter.on("READING_OVER", function (err, data) {
  if (!err) {
    console.log("Reading Over");
    console.log("Content :" + data);
  }
});

eventEmitter.on("READING_STARTED", function () {
  fs.readFile(fileName, function (readErr, data) {
    if (!readErr) {
      console.log("Reading Started");
      eventEmitter.emit("READING_OVER", null, data.toString());
    }
  });
});

fs.writeFile(fileName, context, function (writeErr) {
  if (!writeErr) {
    console.log("Writing Done");
    eventEmitter.emit("READING_STARTED");
  }
});

console.log('Program Ended');