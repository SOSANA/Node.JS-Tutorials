/**
 * Now we have a custom model and method that we can call in our code:
 *
 * This is a very useless custom method, but the idea for how to create a custom
 * method and use it stands. We can use this for making sure that passwords are
 * hashed before saving, having a method to compare passwords, find users with
 * similar attributes, and more.
 */

// if our users.js file is at app/models/user.js
var User = require('./app/models/user');

// create a new user called sosana
var sosana = new User({
  name: 'Sosana',
  username: 'honeyhole',
  password: 'password'
});

// call the custom method. this will just add -dude to his name
// user will now be Sosana-dude
chris.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
sosana.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});
