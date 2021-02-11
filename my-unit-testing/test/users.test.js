const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

// localhost:3000/users
// what feature of the app is put under test
describe('Users REST API End Point', () => { // coming from mocha
  // test case 1
  it('should return json response', (done) => { // coming from mocha
    chai.request('http://localhost:3000')
      .get('/users')
      .then( (res) => {
        expect(res).to.have.json;
        done();
      })
      .catch( (err)=>{
        throw(err);
      })
  });

});

