import assert from 'assert';
import mongoose from 'mongoose';
import request from 'supertest'; // eslint-disable-line
import app from '../../app';

const Driver = mongoose.model('driver');

describe('Drivers controller', () => {
  it('Post to /api/drivers creates a new driver', (done) => {
    Driver.count().then((count) => {
      request(app)
        .post('/api/drivers')
        .send({ email: 'test@test.com' })
        .end(() => {
          Driver.count().then((newCount) => {
            assert(count + 1 === newCount);
            done();
          });
        });
    });
  });

  it('PUT to /api/drivers/:id edits an existing driver', (done) => {
    const driver = new Driver({ email: 't@t.com', driving: false });

    driver.save().then(() => {
      request(app)
        .put(`/api/drivers/${driver._id}`)
        .send({ driving: true })
        .end(() => {
          Driver.findOne({ email: 't@t.com' })
            .then((driverEdit) => {
              assert(driverEdit.driving === true);
              done();
            });
        });
    });
  });

  it('DELETE to /api/drivers/:id can delete a driver', (done) => {
    const driver = new Driver({ email: 'test@test.com' });

    driver.save().then(() => {
      request(app)
        .delete(`/api/drivers/${driver._id}`)
        .end(() => {
          Driver.findOne({ email: 'test@test.com' })
            .then((driverDeleted) => {
              assert(driverDeleted === null);
              done();
            });
        });
    });
  });
});
