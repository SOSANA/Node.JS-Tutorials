/**
 * Technique 3:
 * - Loading a group of related modules
 *
 * Problem:
 * - you want to group related files together under a directory and only have to
 *   load it with one call to require
 * Solution:
 * - create a file called index.js to load each module and export them as a group
 *   or add a package.json file to the directory
 */
var group = require('./group');

group.one();
group.two();
