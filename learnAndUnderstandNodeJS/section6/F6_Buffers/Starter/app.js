// were taking this string and turning it into binary data
var buf = new Buffer('Hello', 'utf8');
// logging binary data
console.log(buf);
console.log('---------------');
// converts buffer back to a string
console.log(buf.toString());
console.log('---------------');
// converting buffer to json
console.log(buf.toJSON());
console.log('---------------');
// using the buffer as an array
console.log(buf[2]);
console.log('---------------');
// can write data to the buffer
buf.write('wo');
console.log(buf.toString());
