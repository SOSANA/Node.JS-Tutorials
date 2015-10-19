/**
 * Technique 2: Creating and managing modules
 * 
 * Problem:
 * - You want to break a project up into seperate files
 * Solution:
 * - Use the exports object
 *
 * - shows how to load these modules with require, and how to use the functionality
 * 	 they provide
 *
 * Which Module?
 * - to determine the exact module Node will load use 'require.resolve' (id). This
 * 	 will return a fully expanded filename
 * ex:
 * var myClass = require.resolve('./myclass');
 * var module2 = require.resolve('./module-2');
 * console.log(myClass); // C:\dev\Node.JS-Tutorials\nodeinpractice\node-techniques\ch2\2\myclass.js
 * console.log(module2); // C:\dev\Node.JS-Tutorials\nodeinpractice\node-techniques\ch2\2\module-2.js
 */
var myClass = require('./myclass');
var module2 = require('./module-2');

console.log(myClass.method());
console.log(module2.method());
console.log(module2.method2());
