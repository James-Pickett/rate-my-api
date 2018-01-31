process.env.NODE_ENV = 'test'; // test env to test

const mongoose = require('mongoose');
const School = require('../api/school/school.model');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

describe('Schools', () => {
  beforeEach((done) => {
    School.remove({}, (err) => {
      done();
    });
  });

  describe('/GET school', () => {
    it('it should GET all the schools', (done) => {
      chai.request(server)
        .get('api/v1/schools')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});
