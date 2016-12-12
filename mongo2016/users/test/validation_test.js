/**
 * - purpose of this test is to make sure we can validate record(s) from the db
 */

 import assert from 'assert';
 import User from '../src/user';

 describe('Validating records', () => {
   it('requires a user name', () => {
     const user = new User({ name: undefined });
     const validationResult = user.validateSync(); // not doing async validation here
     // const message = validationResult.errors.name.message; // es5
     const { message } = validationResult.errors.name;
     assert(message === 'Name is required.');
   });

   it('requires a user\'s name longer than 1 characters', () => {
     const user = new User({ name: 'Al' });
     const validationResult = user.validateSync();
     const { message } = validationResult.errors.name;

     assert(message === 'Name must be longer than 2 characters.');
   });

   it('disallows invalid records from being saved', (done) => {
     const user = new User({ name: 'Al' });
     user.save()
      .catch((validationResult) => {
        const { message } = validationResult.errors.name;
        assert(message === 'Name must be longer than 2 characters.');
        done();
      });
   });
 });
