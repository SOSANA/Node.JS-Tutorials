/**
 * this is different from using the exports object, which requires that you set
 * a property to export something
 */
function MyClass() {
}

MyClass.prototype = {
  method: function() {
    return 'Hello';
  }
};

var myClass = new MyClass();
// objects can be exported, including other objects, methods, and properties
module.exports = myClass;
