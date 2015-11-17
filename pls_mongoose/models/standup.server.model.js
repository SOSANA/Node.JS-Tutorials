var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var memberNameValidator = [
  function (val) {
    // returning weither or no our value passed in is longer than 0 characters
    // and does not equal 'none'
    return (val.length > 0 && val.toLocaleLowerCase() != 'none');
  },
  // custom error text
  'Select a valid member name.'
];

var requiredStringValidator = [
  // trims out any spaces in text
  function (val) {
    var testval = val.trim();
    return (testval.length > 0);
  },
  // custom error text
  '{PATH} cannot be empty'
];

var standupSchema = new Schema({
    memberName: {
      type: String,
      required: true,
      validate: memberNameValidator
    },
    project: {
      type: String,
      required: true,
      validate: requiredStringValidator
    },
    workYesterday: {
      type: String,
      required: true,
      validate: requiredStringValidator
    },
    workToday: {
      type: String,
      required: true,
      validate: requiredStringValidator
    },
    impediment: {
      type: String,
      required: true,
      default: 'none'
    },
    createdOn: { type: Date, default: Date.now }
});

// takes at least two arguments, first one being the name of the model and
// second being the name of the schema
// a third argument could be passed in for the name of the collection as mongodb
// will make model name plural
module.exports = mongoose.model( 'Standup', standupSchema );
