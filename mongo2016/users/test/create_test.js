/**
 * purpose of this test is to make sure it correctly saves to the db
 */

import assert from 'assert';
import User from '../src/user';

describe('Creating records', () => {
  it('saves a user', () => {
    // compares one value to another
    const joe = new User({ name: 'Joe' }); // creating new instance of User
  });
});
