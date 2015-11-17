/**
 * refer to slides
 *
 * Model.update(conditions, update, [options], [callback])
 */
var Standup = require('../models/standup.server.model.js');

// setting up query condition

var condition = { memberName: 'Mary' };
var update = { impediment: 'None - Mary no longer works here!' };

// 'rawResponse' is the full response from Mongo
// 'numberAffected' is the number of documents affected by update
// could put 'condition' and 'update' right in line with the 'Standup.update()'
// statement below but this makes things more clear for us
Standup.update(condition, update, function (err, numberAffected, rawResponse) {
  // handle error or raw results here
  if (err) throw err;

  console.log('NumberAffected: ', numberAffected);
  console.log('RawResponse: ', rawResponse);
});

// finding a document, than updating it
Standup.findOne({ memberName: 'Mary' }, function (err, doc) {
  // handle errors here, validate document results, etc
  doc.impediment = "None - Mary won the lottery and is on an island now";
  doc.save(function (err) {
    // handle errors
    if (err) throw err;
  });
});
