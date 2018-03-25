process.env.NODE_ENV = 'test'; // test env to test

const School = require('./school.model');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server.js');

chai.should();
chai.use(chaiHttp);

describe(`School API Routes ${server.baseUrl}`, () => {
  beforeEach((done) => {
    School.remove({}, () => {
      done();
    });
  });

  describe('GET /schools', () => {
    it('it should get all the schools', (done) => {
      chai.request(server)
        .get(`${server.baseUrl}/schools`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('POST /schools', () => {
    it('it should create a school', (done) => {
      const schoolName = 'Awesome High School';
      const school = { name: schoolName };
      chai.request(server)
        .post(`${server.baseUrl}/schools`)
        .send(school)
        .end((err, res) => {
          res.should.have.a.status(201);
          res.body.should.have.property('name').eql(schoolName);
          done();
        });
    });
  });

  describe('GET /schools/:id', () => {
    it('it should get a school by id', (done) => {
      const schoolName = 'Cool Middle School';
      const school = new School({ name: schoolName });
      school.save(() => {
        chai.request(server)
          .get(`${server.baseUrl}/schools/${school.id}`)
          .send(school)
          .end((err, res) => {
            res.should.have.a.status(200);
            res.body.should.have.a.property('name').eql(schoolName);
            res.body.should.have.property('_id').eql(school.id);
            done();
          });
      });
    });
  });

  describe('PUT /schools/:id', () => {
    it('it should update a school by id', (done) => {
      const school = new School({ name: 'Old name for PUT test' });
      school.save(() => {
        school.save(() => {
          chai.request(server)
            .put(`${server.baseUrl}/schools/${school.id}`)
            .send({ name: 'New name for PUT test' })
            .end((err, res) => {
              res.should.have.a.status(200);
              res.body.should.have.a.property('name').eql('New name for PUT test');
              res.body.should.have.a.property('_id').eql(school.id);
              done();
            });
        });
      });
    });
  });

  describe('DELETE /schools/:id', () => {
    it('it should delete a school by id', (done) => {
      const school = new School({ name: 'For DELETE Test' });
      school.save(() => {
        chai.request(server)
          .delete(`${server.baseUrl}/schools/${school.id}`)
          .end((err, res) => {
            res.should.have.a.status(204);
            done();
          });
      });
    });
  });
});
