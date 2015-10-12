// the new es6 has ways of dealing with binary data as it didn't before
// this is storing raw binary 8 bits of data
// this has nothing to do with node, this is coming from es6
var buffer = new ArrayBuffer(8);
// a way for you to deal with binary data in the buffer
// 'Int32Array' means interger/number stored with 32 bits
var view = new Int32Array(buffer);
// converting 32 bits for a 5 and 15
view[0] = 5;
view[1] = 15;
console.log(view);
