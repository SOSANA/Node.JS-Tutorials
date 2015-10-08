var obj = {
  name: 'John Doe',
  greet: function() {
    // use es6 template literal
    console.log(`Hello ${ this.name }`);
  }
}

obj.greet();
// using '.call' to replace the 'this' keyword
// remember with '.call' we can also pass paramters as the second parameter
obj.greet.call({ name: 'Jane Doe' });
// using '.apply' to replace 'this' keyword
// remember with '.apply' we can pass an array as the secon parameter
obj.greet.apply({ name: 'Jane Doe' });
