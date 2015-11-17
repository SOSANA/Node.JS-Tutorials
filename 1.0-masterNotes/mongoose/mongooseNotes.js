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
 *
 * Comparison Query Operators
 * 	- $gt: greater than
 * 	- $gte: greater than or equals to
 * 	- $in: exists in
 * 	- $lt: less than
 * 	- $lte: less than or equal to
 * 	- $ne: not eual to
 * 	- $nin: does not exist
 *
 * rawResponse:
 * 	- is the full response from Mongo
 *  - Ref: see model.update.js in /1.0-masterNotes
 *
 * numberAffected:
 * 	- is the number of documents affected by update
 * 	- Ref: see model.update.js in /1.0-masterNotes
 *
 * Model.update(condtion, update, [options], [callback]):
 * 	- list of 'options' for update method
 * 		  	Option    |             Description                    | Default Value
 * 		  	----------------------------------------------------------------------
 * 				safe      | Safe mode - default to value set in schema | true
 * 				upsert    | create the document if it does not match   | false
 * 				multi     | determines if multiple documents should    | false
 * 										be updated                                 |
 * 				strict    | override the strict option for this update |
 * 				overwrite | disables the update-only mode to allow     | False
 * 									|	for overwrite of document                  |
 *
 * Model.findByIdAndUpdate(id, update, [options], [callback]):
 * 	- list of 'options' for findByIdAndUpdate method
 * 		  	Option    |             Description                    | Default Value
 * 		  	----------------------------------------------------------------------
 * 				new       | set to true to return the modified document| true
 * 								 	| rather than the original                   |
 * 				upsert    | create the document if it does not match   | false
 * 				select    | specify the document fields to return      |
 *
 */
