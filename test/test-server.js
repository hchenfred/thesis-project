process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/index');

const should = chai.should();

chai.use(chaiHttp);

describe('friendlyTest server', () => {
  it('should list ALL events on /events GET', (done) => {
    chai.request(server)
      .get('/events')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('should list a user on /users/<email> GET', (done) => {
    chai.request(server)
      .get('/users/mogutounew@yahoo.com')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.username.should.equal('Huan');
        done();
      });
  });
});
