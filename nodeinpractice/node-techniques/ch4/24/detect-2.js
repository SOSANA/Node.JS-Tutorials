var redis = require('redis'),
var client = redis.createClient();

client.on('error', function(err) {
  console.error('Error:', err);
});
// the monitor event emitted by the redis module for tracking various internal
// activities occur
client.on('monitor', function(timestamp, args) { 
  console.log('Time:', timestamp, 'arguments:', args);
});

client.on('ready', function() {
  // Start app here
});
