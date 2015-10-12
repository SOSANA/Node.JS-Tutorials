// working with callback patterns
function greet(callback) {
  console.log('Hello!');
  var data = {
      name: 'John doe'
  };
  callback(data);
}

greet(function(data) {
  console.log('The callback was invoked!');
  console.log(data);
  console.log('-------------');
});

greet(function(data) {
  console.log('A different callback was invoked!');
  console.log(data.name);
});
