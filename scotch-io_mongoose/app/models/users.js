/**
 * This is how a Schema is defined. We must grab mongoose and mongoose.Schema.
 * Then we can define our attributes on our userSchema for all the things we
 * need for our user profiles. Also notice how we can define nested objects as
 * in the meta attribute.
 *
 * The allowed SchemaTypes are:
 * 	- String
 * 	- Number
 * 	- Date
 * 	- Buffer
 * 	- Boolean
 * 	- Mixed
 * 	- ObjectId
 * 	- Array
 *
 * We will then create the mongoose Model by calling mongoose.model. We can
 * also do more with this like creating specific methods. This is a good place
 * to create a method to hash a password.
 */

// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// custom method to add string to end of name
// you can create more important methods like name vvalidations or formatting
// you can also do queries and find similar users
userSchema.methods.dudify = function() {
  // add some stuff to the users name
  this.name = this.name + '-dude';

  return this.name;
};

// on every save, add the Date
// Now on every save, we will add our dates. This is also a great place to
// hash passwords to be sure that we never save plaintext passwords. We can
// also define more things on our models and schemas like statics and indexes.
// Be sure to take a look at the mongoose docs for more information
userSchema.pre('save', function(next) {
  // get the current Date
  var currentDate = new Date();

  // change the updated_at field to current Date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
