// Standup Model

var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var standupSchema = new Schema({
    memberName: {
        type: String,
        required: true,
        default: 'Mark'	},
    project: {
        type: String,
        required: true,
        default: 'Mongoose'},
    workYesterday: {
        type: String,
        required: true,
        default: ''},
    workToday: {
        type: String,
        required: true,
        default: ''},
    impediment: {
        type: String,
        required: true,
        default: 'none'},
    createdOn: {
        type: Date,
        default: Date.now}
});

module.exports = mongoose.model( 'Standup', standupSchema );