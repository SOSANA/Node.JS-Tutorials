function Emitter() {
  this.events = {};
}
/**
 * creating a method 'on'.
 * This will be a function that takes two parameters, type of event
 * that we want and a listener 'on' that creates a new property on
 * the object and makes sure that property is an array and starts
 * adding functions into that array. This is how we listen
 */
Emitter.prototype.on = function(type, listener) {
  // we are making sure object property is an array
  this.events[type] = this.events[type] || [];
  // we than push that object property to an array
  this.events[type].push(listener);
};
// creating a method 'emit'. This will emit when something happens
// An event happened and who ever is watching/listening can respond
Emitter.prototype.emit = function(type) {
  // if we have that property on the object
  if (this.events[type]) {
    // take that property which will be an array and loop over the
    // array and execute it
    this.events[type].forEach(function(listener) {
      // invoking and objects/functions in the array
      listener();
    });
  }
};

module.exports = Emitter;
