/**
 * - purpose of this test is to make sure we can update record(s) from the db
 *  - five different ways to update(s) a record
 *    - User.update(), User.findOneAndUpdate(), User.findByIdAndUpdate(), and
 *      model instance remove joe.update(), 'set' and 'save'
 *    -'set': is used when we want to change one of the properties on an object,
 *      it is soley done in memory, no update is done in db
 */

import assert from 'assert';
import User from '../src/user';

describe('Updating records', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe', postCount: 0 });
    joe.save()
    .then(() => done());
  });

  function assertName(operation, done) {
    operation
    .then(() => User.find({}))
    .then((users) => {
      assert(users.length === 1);
      assert(users[0].name === 'Alex');
      done();
    });
  }

  it('Instance type using set n save', (done) => {
    // console.log(joe);
    joe.set('name', 'Alex');
    // console.log(joe);
    assertName(joe.save(), done);
  });

  it('A model instance can update', (done) => {
    assertName(joe.update({ name: 'Alex' }), done);
  });

  it('A model class can update', (done) => {
    assertName(
      User.update({ name: 'Joe' }, { name: 'Alex' }),
      done
    );
  });

  it('A model class can update one record', (done) => {
    assertName(
      User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' }),
      done
   );
  });

  it('A model class can find a record with an Id and update', (done) => {
    assertName(User.findByIdAndUpdate(joe._id, { name: 'Alex' }), done);
  });

  it('A user can have their postcount incremented by 1', (done) => {
    User.update({ name: 'Joe' }, { $inc: { postCount: 1 } })
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user.postCount === 1);
        done();
      });
  });
});
