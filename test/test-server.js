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
        res.body.should.have.property('username');
        res.body.should.have.property('email');
        res.body.should.have.property('photourl');
        res.body.should.have.property('facebook_id');
        res.body.should.have.property('phone');
        res.body.username.should.equal('Huan');
        done();
      });
  });

  it('should add a single user on /users POST', (done) => {
    chai.request(server)
      .post('/users')
      .send({ username: 'Lee', facebook_id: 100 })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
