/**
 * Technique 8: Getting platform information
 *
 * 	- node has some built-in methods for querying operating system functionality
 *
 * Problem:
 * 	- you need to run platform-specifc code based on operating system or processor
 * 		architecture
 * Solution:
 * 	- use the 'process.arch' and 'process.platform' properties
 *
 * 	- other information from the system can also be gleaned through the processed
 * 		module. One such method is 'process.memoryUsusage()', it returns an object
 * 		with three properties that describe the process current memory usage:
 * 			- rss: the resident set size, which is the portion of the process's memory
 * 				that is held in RAM
 * 			- heapTotal: available memory for dynamic allocations
 * 			- heapUsed: amount of heap used
 */
 switch (process.arch) {
   case 'x64':
     require('./lib.x64.node');
     break;
   case 'ia32':
     require('./lib.Win32.node');
     break;
   default:
     throw new Error('Unsupported process.arch:', process.arch);
 }
