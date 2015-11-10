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

// 'find and update' (get a user with ID of 1)
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

// you can also use mongoDB query syntax
var monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);

User.find({ admin: true}).where('created_at').gt(monthAgo).exec(function(err, users) {
  if (err) throw err;

  // show the admins in the past monthAgo
  console.log(users);
});
