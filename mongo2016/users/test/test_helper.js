// const mongoose = require('mongoose');
import mongoose from 'mongoose';

// setting es6 promises by default for mongoose
mongoose.Promise = global.Promise;

// runs and connects to mongo one time
before((done) => {
  mongoose.connect('mongodb://localhost/mongo2016_users_test');
  mongoose.connection
    .once('open', () => {
      // console.log('Good to go!');
      done();
    })
    .on('error', (error) => {
      console.warn('Error', error); // eslint-disable-line
    });
});

// a hook is a function that will be executed before any test gets executed
// inside the test suite. You need to pass done callback
beforeEach((done) => {
  const { users, comments, blogposts } = mongoose.connection.collections; // eslint-disable-line
  users.drop(() => {
    blogposts.drop(() => {
      done();
    });
  });

  // take all the records inside the users collections and get rid of them
  // mongoose.connection.collections.users.drop(() => {
    // ready to run the next test! sends a signal to mocha that its done
  //  done();
  // });
});
