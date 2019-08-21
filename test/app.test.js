const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

describe('GET /frequency', () => {
  it('should return 400 for no query', () => {
    return request(app)
      .get('/frequency')
      .expect(400, 'Invalid request');
  });

  it('should return 400 for undefined query', () => {
    const query = undefined;
    return request(app)
      .get('/frequency')
      .query({ s: query })
      .expect(400, 'Invalid request');
  });

  it('should return an object with correct keys for valid query', () => {
    const query = 'aaBBAAbbaa';
    return request(app)
      .get('/frequency')
      .query({ s: query })
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body)
          .to.be.an('object')
          .that.to.include.keys('unique', 'average', 'highest');
      });
  });

  it('should return correct count of letters', () => {
    const query = 'aaBBAAbbaa';
    const expected = {
      unique: 2,
      average: 5,
      highest: 'a',
      a: 6,
      b: 4
    };
    return request(app)
      .get('/frequency')
      .query({ s: query })
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body)
          .to.be.an('object')
          .that.eql(expected);
      });
  });

  it('should return alphabetical first highest in case of tie', () => {
    const query = 'AAABBBCCCDDD';
    const expected = {
      unique: 4,
      average: 3,
      highest: 'a',
      a: 3,
      b: 3,
      c: 3,
      d: 3
    };
    return request(app)
      .get('/frequency')
      .query({ s: query })
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body)
          .to.be.an('object')
          .that.eql(expected);
      });
  });
});
