/**
 * refer to slides
 *
 * Model.remove(conditions, [callback])
 */
var Standup = require('../models/standup.server.model.js');

// setting up query condition
var condition = { memberName: 'Mary' };

Standup.remove(condition, function (err) {
  // handle error here
});

// remove any document created on or after Halloween day
var gteDate = new Date(2014, 10, 31);
Standup.remove({ createdOn: { $gte: gteDate }}, function (err) {
  // handle error here
});

// execute query w/o a callback function, does not wait on response
var query = Standup.remove({ createdOn: { $gte: gteDate }});
query.exec();
