/**
 * - purpose of this test is to make sure we can add virtual types to our
 *   record(s) from the db
 */

import assert from 'assert';
import User from '../src/user';

describe('Virtual types', () => {
  it('postCount returns number of posts', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: [{ title: 'PostTitle' }]
    });

    joe.save()
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user.postCount === 1);
        // assert(joe.postCount === 1);
        done();
      });
  });
});
