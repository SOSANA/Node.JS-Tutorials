/**
 * Technique 4: Working with paths
 *
 * Problem:
 * 	- You want to access a file that isn't handled by the module system
 * Solution:
 * 	- Use __dirname or __filename
 *
 * 	- most developers join these variables with a path frament using simple
 *  - string concatenation: var view = __dirname + '/views/view.html';
 *
 * 	- to make sure paths are joined correctly, you can use node's path
 *  - module: path.joined
 *  - ex: (__dirname, 'views', 'view.html');
 */

console.log('__dirname:', __dirname);
console.log('__filename:', __filename);
