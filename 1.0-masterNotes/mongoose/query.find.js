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
  if (err) throw err;
  console.log(results);
});

// with callback and query conditions
Standup.find({ memberName: 'David' }, function (err, results) {
  // handle the error, or results here
  if (err) throw err;
  console.log(results);
});

// limit the returned fields
// find key 'memberName' with value of 'Mary' and only return
// 'memberName' and 'impediment' values
Standup.find({ memberName: 'Mary'}, 'memberName impediment', function (err, results) {
  // handle the error, or results here
  if (err) throw err;
  console.log(results);
});
