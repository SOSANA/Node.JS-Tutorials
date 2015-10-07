// module.exports vs exports
// when object is set to "equal" it breaks the reference by value
// causing two different objects and two different spots in memory
exports = function() {
  console.log('Hello');
};

console.log(exports);
console.log(module.exports);
