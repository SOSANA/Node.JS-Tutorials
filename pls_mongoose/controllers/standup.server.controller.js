var Standup = require('../models/standup.server.model.js');

// method 'create'
exports.create = function(req, res) {
  var entry = new Standup({
    memberName: req.body.memberName,
    project: req.body.project,
    workYesterday: req.body.workYesterday,
    workToday: req.body.workToday,
    impediment: req.body.impediment
  });

  // saving entry, normally pass a callback for errors
  entry.save();

  // redirect to home page...
  res.redirect(301, '/');
};

// method 'getNote'
exports.getNote = function(req, res) {
  res.render('newnote', { title: 'Standup - New Note'});
};
