/**
 * Technique 18: Creating your own network protocol
 * 	- covering some additional aspects of working with a binary data, like bit
 * 		masks, protocol design, and compressing binary data
 *
 * Problem:
 * 	- you want to create an efficent transport of messages across the network
 * 		or in process
 * Solution:
 * 	- JavaScript and the node buffer API give you tools to create your own
 * 		binary protocol
 *
 * 	- to create a binary protocol, you first have to define what kind of information
 * 		you want to send across the wire and how you'll represent that information.
 */
var zlib = require('zlib');
var database = [ [], [], [], [], [], [], [], [] ];
var bitmasks = [ 1, 2, 4, 8, 16, 32, 64, 128 ];

function store (buf) {
  var db = buf[0];
  var key = buf.readUInt8(1);

  if (buf[2] === 0x78) {
    zlib.inflate(buf.slice(2), function (er, inflatedBuf) {
      if (er) return console.error(er);
      var data = inflatedBuf.toString();

      bitmasks.forEach(function (bitmask, index) {
        if ( (db & bitmask) === bitmask) {
          database[index][key] = data;
        }
      });

      console.log('updated db', database);
    });
  }
}

zlib.deflate('my message', function (er, deflateBuf) {
  var header = new Buffer(2);
  header[0] = 0x8; // which databases to store
  header[1] = 0; // key

  var message = Buffer.concat([header, deflateBuf]);
  store(message);
});
