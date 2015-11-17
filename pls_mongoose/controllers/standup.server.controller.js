var Standup = require('../models/standup.server.model.js');

// creating a method called 'list'
exports.list = function (req, res) {
  var query = Standup.find();
  // in our index.html we have a swig for loop that gets its data
  // from notes: result
  query.sort({ createdOn: 'desc'})
       .limit(12)
       .exec(function (err, results) {
         res.render('index', { title: 'Standup - List', notes: results});
       });
};

// creating a method called 'filterByMember'
exports.filterByMember = function (req, res) {
  var query = Standup.find();
  var filter = req.body.memberName;

  query.sort({ createdOn: 'desc'});

  if (filter.length > 0) {
    query.where({ memberName: filter});
  }

  query.exec(function (err, results) {
    res.render('index', { title: 'Standup - List', notes: results });
  });
};

// creating a method called 'create'
exports.create = function (req, res) {
  var entry = new Standup({
    memberName: req.body.memberName,
    project: req.body.project,
    workYesterday: req.body.workYesterday,
    workToday: req.body.workToday,
    impediment: req.body.impediment
  });
  // save the entry
  entry.save(function (err) {
      if (err) {
          var errMsg = 'Sorry, there was an error saving the stand-up meeting note. ' + err;
          res.render('newnote', { title: 'Standup - New Note (error)', message: errMsg });
      }
      else {
          console.log('Stand-up meeting note was saved!');
          // Redirect to the home page to display list of notes...
          res.redirect(301, '/');
      }
  });
};

// creating a method called 'getNote'
exports.getNote = function (req, res) {
  res.render('newnote', { title: 'Standup - New Note'});
};
