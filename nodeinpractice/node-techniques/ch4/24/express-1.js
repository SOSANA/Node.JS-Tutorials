/**
 * Technique 24: Detecting and exploiting EventEmitter
 * 	- it's useful to spot where EventEmitter is being used and to know how to
 * 		take advantage of it
 *
 * Problem:
 * 	- you're working on a large project with several components and want to
 * 		communicate with them
 * Solution:
 * 	- look for the emit and on methods whenever you're using either NOde's
 * 		standard modules or open source libraries. For example, the express app
 * 		object has these methods, and they're great for sending messsages within
 * 		an application
 *
 * 	- when your working on a large project, there's a major component that's
 * 		central to your problem domain. If your building a web application with
 * 		Express, then the app object is one such component. A quick check of the
 * 		source shows that this object mixes in EventEmitter, so you can take
 * 		advantage of events to communicate between the disparate components within
 * 		your project
 */
var express = require('express');
var app = express();

app.on('hello-alert', function() {
  console.warn('Warning!');
});

app.get('/', function(req, res){
  // this app object is also availabe in res.app
  res.app.emit('hello-alert');
  res.send('hello world');
});

app.listen(3000);
