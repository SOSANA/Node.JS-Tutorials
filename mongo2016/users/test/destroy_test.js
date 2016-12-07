/**
 * - purpose of this test is to make sure we can delete a record from the db
 *  - four different ways to delete/destroy/remove a record
 *    - User.remove(), User.findOneAndRemove(), User.findByIdAndRemove(), and
 *      model instance remove joe.remove()
 */

import assert from 'assert';
import User from '../src/user';

describe('Deleting a user', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => done());
  });

  it('model instance remove', (done) => {
    // remove one specific record with some given criteria
    joe.remove()
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method remove', (done) => {
    // remove a bunch of records with some given criteria
    User.remove({ name: 'Joe' })
    .then(() => User.findOne({ name: 'Joe' }))
    .then((user) => {
      assert(user === null);
      done();
    });
  });

  it('class method findOneAndRemove', (done) => {
    // remove one specific record with some given criteria
    User.findOneAndRemove({ name: 'Joe' })
    .then(() => User.findOne({ name: 'Joe' }))
    .then((user) => {
      assert(user === null);
      done();
    });
  });

  it('class method findByIdAndRemove', (done) => {
    // remove one specific record by id with some given criteria
    User.findByIdAndRemove(joe._id)
    .then(() => User.findOne({ name: 'Joe' }))
    .then((user) => {
      assert(user === null);
      done();
    });
  });
});
