//using node js native assert module
// node assert-example.js
const assert = require('assert');

assert.strictEqual(1, 1, 'Not Equal'); // wont show any consoel.log

// changing the above to check for another set of values
// assert.strictEqual(1, 10, 'Not Equal');

// if we want more assertion methods / api's -- we need to use chai 
// chai provides api's such as expect, should, assert 
