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
 *
 * EX: for detailed notes on querying, updating, saving, creating, etc
 * 	ref: https://github.com/SOSANA/Node.JS-Tutorials/tree/master/scotch-io_mongoose
 */
