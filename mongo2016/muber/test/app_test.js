import assert from 'assert';
import request from 'supertest'; // simulates requests
import app from '../app';

describe('The express app', () => {
  it('Handles a GET request to /api', (done) => {
    request(app)
      .get('/api')
      .end((err, response) => {
        // console.log(response); // eslint-disable-line
        assert(response.body.hi === 'there');
        done();
      });
  });
});
