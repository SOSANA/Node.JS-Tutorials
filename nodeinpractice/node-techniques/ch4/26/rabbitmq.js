/**
 * Technique 26: Alternatives to EventEmitter
 * 	- EventEmitter has a great API and works well in Node programs, but
 * 		sometimes a problem requires a slightly different solution.
 *
 * Problem:
 * 	- your trying to solve a problem that doesn't quite fit EventEmitter
 * Solution:
 * 	- depending on the exact nature of the problem your trhying to solve, there
 * 		are several alternatives to EventEmitter such as publish/subscribe, AMQP,
 * 		and js-signals are some popular alternatives with good support in Node
 *
 * 	- the EventEmitter classs is an implementation of the observer pattern, A
 * 		related pattern is publish/subscribe, where publishers send messages that
 * 		are characterized into classes to subscribers without knowsing the details
 * 		of the subscribers themselves
 * 	- the publish/subscribe pattern is often useful in cases wher ehorizontal
 * 		scaling is required. If you need to run multiple Node processes on multiple
 * 		servers, then technologies like AMQP and 0MQ can help implement this. They
 * 		are both specifically designed to solve this class of problem, but may not
 * 		be as conveient as using the Redis publish/subscribe API
 */
var rabbitHub = require('rabbitmq-nodejs-client');
var subHub = rabbitHub.create( { task: 'sub', channel: 'myChannel' } );
var pubHub = rabbitHub.create( { task: 'pub', channel: 'myChannel' } );

subHub.on('connection', function(hub) {
  hub.on('message', function(msg) { //<co id="callout-events-alternatives-1-1" />
    console.log(msg);
  }.bind(this));
});
subHub.connect();

pubHub.on('connection', function(hub) {
  hub.send('Hello World!');
});
pubHub.connect();
