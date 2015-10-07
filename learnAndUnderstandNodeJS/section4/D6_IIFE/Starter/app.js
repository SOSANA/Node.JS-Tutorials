var firstname = 'jane';

// most common way to use IIFEs (Immediately Invoked function Expressions)
(function (lastname) {

  var firstname = 'John';
  console.log(firstname);
  console.log(lastname);
}('Doe'));

console.log(firstname);
