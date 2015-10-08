/**
 * A JavaScript Engine:
 *  - a program that converts javascript code into something the computer
 *    processor can understand
 *  - follows the ECMAScript standard on how the language should work and
 *    what features it should have
 *  - ex:
 *      - V8 (google), SpiderMonkey (Mozilla | MDN), and many more
 *      - ref: https://en.wikipedia.org/wiki/List_of_ECMAScript_engines
 *
 * Arguments:
 *  - values you give your program that affect how it runs
 *  - essentially passing parameters to a function
 *
 * BreakPoint:
 *  - a spot in our code where we tell a debugging tool to pause the execution
 *    of our code so we can figure out what's going on
 *  - ref: section4/D2_FirstClassFunctions & watch lecture 17
 *  	https://www.udemy.com/understand-nodejs/learn/#/lecture/3484570
 *
 * Command Line Interface (cli):
 *  - a utility to type commands to your computer rather than click
 *  - ex:
 *    - bash on linux
 *    - terminal on mac
 *    - command prompts on windows
 *  - ref: http://cli.learncodethehardway.org/book/
 *
 * CommonJS Modules:
 * 	- an agreed upon standard for how code modules should be structured
 *
 * ECMAScript:
 *  - the standard javascript is based on
 *  - needed a standard since there are many engines
 *
 * Event:
 * 	- something that has happened in our app that we can respond to
 * 	- in node we actually talk about two different kinds of events
 * 		- system events: comes from C++ Core (libv)
 * 		- custom events: comes from JavaScript core (event emitter)
 *
 * Event Listener:
 * 	- the code that responds to an event
 * 	= in JavaScript's case, the listener will be a function
 *
 * First-Class Functions:
 * 	- everything you can do with other types (strings, numbers, etc) you can
 * 		do with functions.
 * 	- you can use functions like strings, numbers, etc.
 * 	- ex:
 * 			- pass them around
 * 			- set variables equal to them
 * 			- put them in arrays and more
 * 	- ref: section4/D2_FirstClassFunctions
 *
 * Function constructors:
 * 	- a normal function that is used to construct objects
 * 	- the 'this' variable points a new empty object, and that object is returned
 * 		from the function automatically
 *
 * Function Expressions:
 * 	- a block of code that results in a values
 * 	- are possible in javascript because functions are First-Class.
 * 	- ref: section4/D2_FirstClassFunctions
 *
 * Inheritance:
 * 	- one object gets access to the properties and methods of another object
 *  - ref: section4/D5_PrototypalInheritance
 *
 * Invoke:
 * 	- run the function
 * 	- we can also say 'call' the function
 *
 * JSON (JavaScript Object Notation):
 * 	- a standard for structuring data
 * 	- inspired by JavaScript Object Literals
 * 	- JavaScript engines are built to understand it
 *
 * Machine Code (Language):
 *  - programming languages spoken by computer processors
 *  - every program you run on your computer has been converted (compiled)
 *    into machine code
 *  - Node and V8 are written in C++, and is closer to the machine code
 *  - ref: notes/levelOfAbstraction.png
 *
 * Module:
 * 	- a reusable block of code whose existence does not accidentally impact
 * 		other code. JavaScript didn't have this before
 * 	- 'require' is a function, that you pass a 'path' too
 * 	- 'module.exports' is what the require function returns
 * 	- this works because your code is actually wrapped in a function that is
 * 		given these things as function parameters
 * 		ref: slides/moduleExports
 *
 * Mutate:
 * 	- to change something
 * 	- ex: adding a method or property to an object means your've mutated that object
 *
 * Name/Value Pair:
 * 	- a name which maps to a value
 * 	- the name may be defined more than once,but only can have one value in
 * 		any given context
 * 	- that value may be more name/value paris
 * 	- ref: section4/D4_ObjectLiterals
 *
 * Object:
 * 	- a collection of name/value pairs
 * 	- the simplest definition when talking about javascript
 * 	- ref: section4/D4_ObjectLiterals/
 *
 * Primitive:
 * 	- a type of data that represents a single value
 * 	- like a number or a string. In other words, not an object
 *
 * Revealing Module Pattern:
 * 	- exposing only the properties and methods you want via an returned object
 * 	- very common and clean way to structure and protect code within modules
 * 	-	ref: section4/D11_ModulePatterns/Starter/greet5
 *
 * Scope:
 * 	- where in code you have access to particular variable or function
 */
