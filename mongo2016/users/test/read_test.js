/**
 * - purpose of this test is to make sure it queries db correctly
 */

import assert from 'assert';
import User from '../src/user';

describe('Reading users out of the database', () => {
  let alex, betty, chris, joe;

  // making sure we have a user in our collection
  beforeEach((done) => {
    alex = new User({ name: 'Alex' });
    betty = new User({ name: 'Betty' });
    chris = new User({ name: 'Chris' });
    joe = new User({ name: 'Joe' });

    Promise.all([alex.save(), betty.save(), chris.save(), joe.save()])
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

  it('find a user with a particular id', (done) => {
    User.findOne({ _id: joe._id })
      .then((user) => {
        assert(user.name === 'Joe');
        done();
      });
  });

  it('can skip and limit the result set', (done) => {
    User.find({})
    .sort({ name: 1 }) // sort all users by name property in ascending ( A to Z)
    .skip(1) // skip first record
    .limit(2) // limit results to 2
    .then((users) => {
      console.log(users); // eslint-disable-line
      assert(users.length === 2); // assert limit is 2
      assert(users[0].name === 'Betty'); // assert we always get same results first
      assert(users[1].name === 'Chris'); // assert we always get same results second
      done();
    });
  });
});
