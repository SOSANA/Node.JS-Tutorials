/**
 * - purpose of this test is to make sure it correctly saves to the db
 */

import assert from 'assert';
import User from '../src/user';

describe('Creating records', () => {
  it('saves a user', (done) => {
    const joe = new User({ name: 'Joe' }); // creating new instance of User
    joe.save()
      .then(() => { // has successfully saved
        // assert compares one value to another, mongoose provides isNew function
        assert(!joe.isNew);
        done(); // make sure to call it in our spec/it block
      })
      .catch(() => {

      });
  });
});
