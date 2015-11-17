/**
 * refer to slides
 *
 * Model.findById(id, [fields], [options], [callback])
 */
var id = '541c6fefefdf9c84172162a6';
var Standup = require('../models/standup.server.model.js');

// by Id, no conditions
var query = Standup.findById();
query.exec(function (err, doc) {
  // handle the error, or results here
  if (err) throw err;
  console.log(doc);
});

// same as above, chained method calls
Standup.findById(id).exec(function (err, results) {
  // handle the error, or results here
  if (err) throw err;
  console.log(results);
});

// by id, return every field BUT impediment
// notice the '-' in '-impediment', which is a way to filter that result out
var query = Standup.findById(id, '-impediment');
