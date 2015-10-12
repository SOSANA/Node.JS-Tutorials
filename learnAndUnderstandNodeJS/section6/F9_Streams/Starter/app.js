// remember that buffers only hold a certain amount of data in 'chunks'
var fs = require('fs');
// we are able to use 'highWaterMark' to break that data into chunks
// creating a readable stream
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
// creating a writeable stream
var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');
// adding a listener by listening to 'data' and sending the data to a writeable stream
// a piece at a time with 'highWaterMark' and we didn't need a massive buffer and sent
// it in pieces and minimize the amount of memory our app is using
readable.on('data', function (chunk) {
	console.log(chunk);
	// coping greet.txt and writing it to new file greetcopy.txt
	writeable.write(chunk);
});
