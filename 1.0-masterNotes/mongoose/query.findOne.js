/**
 * refer to slides
 *
 * Model.findOne(conditions, [fields], [options], [callback])
 */
var Standup = require('../models/standup.server.model.js');

// no callback, no conditions
var query = Standup.findOne();
query.exec(function (err, results) {
  // handle the error, or results here
  if (err) throw err;
  console.log(results);
});

// with conditions
Standup.findOne({ memberName: 'Mark' });
