import assert from 'assert';
import request from 'supertest'; // eslint-disable-line
import app from '../../app';

describe('Drivers controller', () => {
  it('Post to /api/drivers creates a new driver', (done) => {
    request(app)
      .post('/api/drivers')
      .send({ email: 'test@test.com' })
      .end(() => {
        done();
      });
  });
});
