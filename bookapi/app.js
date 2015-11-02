var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');

// loading our book model
var Book = require('./models/bookModel');
//setting up an instance of express
var app = express();
// sets up our env port
var port = process.env.PORT || 3000;
// setting up an instance of Router
var bookRouter = express.Router();
// setting up our Books router, which is a better way to use multiple routes
bookRouter.route('/Books')
  .get(function (req,res) {
    var query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(query, function(err, books){
      if (err)
        res.status(500).send(err);
      else
        res.json(books);
    });
  });
// setting up our base for where our api route will be
// this will take care of using all our api routes
app.use('/api', bookRouter);
// simple straight forward
app.get('/', function(req, res) {
  res.send('Welcome to my API!');
});

app.listen(port, function() {
  console.log('Gulp is running my app on PORT: ' + port);
});
