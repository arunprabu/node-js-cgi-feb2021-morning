const { assert, expect } = require('chai');
const should = require('chai').should();

let myScores = [ 10, 20, 32420, 3453, 120, 3523];

// let's try assert 
assert.isArray(myScores, ' myScores - not an array'); //passes
assert.include(myScores, 20, 'myScores does not have 20'); // passes
assert.lengthOf(myScores, 6, 'Array does not have length of 10'); // passes

// lets try expect
expect(myScores).to.be.an('array').that.includes(20); // passes
expect(myScores).to.have.lengthOf(6); // passes

// let's try should 
let x = 'Hello World';
x.should.be.a('string').that.includes('World');// passes
myScores.should.have.lengthOf(6);

