var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var standupSchema = new Schema({
    memberName: String,
    project: String,
    workYesterday: String,
    workToday: String,
    impediment: String,
    createdOn: { type: Date, default: Date.now }
});

// takes at least two arguments, first one being the name of the model and
// second being the name of the schema
// a third argument could be passed in for the name of the collection as mongodb
// will make model name plural
module.exports = mongoose.model( 'Standup', standupSchema );
