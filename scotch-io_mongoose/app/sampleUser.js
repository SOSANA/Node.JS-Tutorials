// grab the user model at app/models/user.js
var User = require('./app/models/user');

// create a new user
var newUser = User({
  name: 'Peter Quill',
  username: 'starlord55',
  password: 'password',
  admin: true
});

// save the user
newUser.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});


/**
 * query methods
 */

// 'find all' (get all the users)
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});

// 'find one' (get the user starlord55)
User.find({ username: 'starlord55'}, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});

// 'find by ID' (get a user with ID of 1)
User.findById(1, function (err, user) {
  if (err) throw err;

  // show the one user
  console.log(user);
});


/**
 * Update methods
 */

// 'update' (get a user with ID of 1)
// Remember that since we created the function to change the updated_at date,
// this will also happen on save.
User.findById(1, function(err, user) {
  if (err) throw err;

  // change the users location
  user.location = 'uk';

  // save the user
  user.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });
});

// 'find and update' (find the user starlord55 and update him to starlord 88)
User.findOneAndUpdate({ username: 'starlord55'}, { username: 'starlord88'}, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});

// 'find by id and update' (find the user with id 4 and update username to starlord 88)
User.findByIdAndUpdate(4, { username: 'starlord88'}, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});


/**
 * Delete methods
 */

// 'Get a User, Then Remove' (get a user starlord55 and then remove)
User.find({ username: 'starlord55'}, function(err, user) {
  if (err) throw err;

  // delete user
  user.remove(function (err) {
    if (err) throw err;

    console.log('user successfully deleted!');
  });
});

// 'Find and Remove' (find the user with id 4 and then remove)
User.findOneAndRemove({ username: 'starlord55'}, function(err, user) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});

// 'Find By ID and Remove' (find the user with id 4 and then remove)
User.findOneAndRemove(4, function(err, user) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});


// you can also use mongoDB query syntax
var monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);

User.find({ admin: true}).where('created_at').gt(monthAgo).exec(function(err, users) {
  if (err) throw err;

  // show the admins in the past monthAgo
  console.log(users);
});
