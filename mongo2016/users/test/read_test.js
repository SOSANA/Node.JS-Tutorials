/**
 * - purpose of this test is to make sure it queries db
 * Find Records
 *  - find a user with a name of 'joe'
 *    - ex: User.findOne(criteria)
 *      - find the first user that matches the criteria. Returns a single record
 *  - find a particular user with this given id
 *    - ex: User.find(criteria)
 *      - find all users that match the given criteria. Returns an array
 */

import assert from 'assert';
import User from '../src/user';

describe('Reading users out of the database', () => {
  // defining joe
  let joe;

  // making sure we have a user in our collection
  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => done());
  });

  it('finds all users with a name of joe', (done) => {
    User.find({ name: 'Joe' })
      .then((users) => {
        // console.log(users); // eslint-disable-line no-console
        // console.log(users[0]._id); // eslint-disable-line no-console
        // console.log(joe._id); // eslint-disable-line no-console
        // .toString() pulls out the full string out of the object
        assert(users[0]._id.toString() === joe._id.toString());
        done();
      });
  });
});
