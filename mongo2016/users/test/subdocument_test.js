/**
 * - purpose of this test is to make sure we can add subdocuments to our
 *   record(s) from the db
 */

 import assert from 'assert';
 import User from '../src/user';

 describe('Subdocuments', () => {
   it('can create a subdocument', (done) => {
     const joe = new User({
       name: 'Joe',
       posts: [{ title: 'PostTitle' }]
     });

     joe.save()
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user.posts[0].title === 'PostTitle');
        done();
      });
   });

   it('Can add subdocuments to an existing record', (done) => {
     const joe = new User({ // create joe model
       name: 'Joe',
       posts: []
     });

     joe.save() // save joe
      .then(() => User.findOne({ name: 'Joe' })) // fetch joe
      .then((user) => { // add new record
        user.posts.push({ title: 'New Post' });
        return user.save(); // saving joe
      })
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user.posts[0].title === 'New Post');
        done();
      });
   });

   it('can remove an existing subdocument', (done) => {
     const joe = new User({
       name: 'Joe',
       posts: [{ title: 'New Post' }]
     });

     joe.save()
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        const post = user.posts[0];
        post.remove();
        return user.save();
      })
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user.posts.length === 0);
        done();
      });
   });
 });
