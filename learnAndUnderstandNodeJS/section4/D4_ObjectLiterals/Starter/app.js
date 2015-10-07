var person = {
  firstname: 'John',
  lastname: 'Doe',
  greet: function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
};

person.greet();

// another way beside '.'
//console.log(person['firstname']);
