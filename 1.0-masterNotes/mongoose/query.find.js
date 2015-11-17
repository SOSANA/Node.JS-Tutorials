/**
 * refer to slides
 *
 * Model.find(conditions, [fields], [options], [callback])
 */
var Standup = require('../models/standup.server.model.js');

// no callback, deferred execution
var query = Standup.find();

// with callback, executes query immediately
Standup.find(function (err, results) {
  // handle the error, or results here
});

// with callback and query conditions
Standup.find({ memberName: 'David' }, function (err, results) {
  // handle the error, or results here
});
