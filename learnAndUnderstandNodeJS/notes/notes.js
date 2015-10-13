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
 * Abstract (Base) Class:
 * 	- a type of constructor you never work directly with, but inherit from
 * 	- we create new custom objects which inherit from the abstract base class
 *
 * Arguments:
 *  - values you give your program that affect how it runs
 *  - essentially passing parameters to a function
 *
 * Aynchronous:
 * 	- more than one process running simultaneously
 * 	- node does things asynchronously. V8 does not
 *
 * Binary Data:
 * 	- data stored in binary (sets of 1s and 0s)
 * 	- the core of the math that computers are based on
 * 	- each one or zero is called a 'bit' or 'binary digit'
 *
 * BYTE:
 * 	- 8 bits
 * 	- 1 KB = 1024 Bytes
 * 	- ex: 00101100
 *
 *
 * Character Encoding:
 * 	- how characters are stored in binary
 * 	- the numbers (or code points) are converted and stored in binary
 * 	- numbers in base 10 to numbers in base 2 to binary and how many bits/digits
 * 		we are using to store that
 * 	- ex: 'UTF-8' stores 8 bits, see slides for more info
 *
 * Character Set:
 * 	- a representation of characters as numbers
 * 	- each character gets a number.
 * 	- 'Unicode' and 'ASCII' are character sets
 * 	- numbers to letters
 * 	- ex: see slides for more info
 *
 * BreakPoint:
 *  - a spot in our code where we tell a debugging tool to pause the execution
 *    of our code so we can figure out what's going on
 *  - ref: section4/D2_FirstClassFunctions & watch lecture 17
 *  	https://www.udemy.com/understand-nodejs/learn/#/lecture/3484570
 *
 * Buffer:
 * 	- a temporary holding spot for data being moved from one place to another
 * 	- intentionally limited in size
 * 	- ex: think of watching a video "its buffering"
 *
 * Callback:
 * 	- a function passed to some other function, which we assume will be invoked
 * 		at some point
 * 	- the function 'calls back' invoking the function you give it when it is
 * 		done doing its work
 *
 * Chunk:
 * 	- a piece of data being sent through a stream
 * 	- data is split in 'chunks' and streamed
 * 	- ex: section6/F9_Streams
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
 * Error-First Callback:
 * 	- callbacks take an error object as their first parameter
 * 	- null if no error, otherwise will contain an object defining the error
 * 	- this is a standard so we know in what order to place our parameters for
 * 		our callbacks
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
 * HTTP:
 * 	- a set of rules (and a format) for data being transferred on the web
 * 	- stands for 'HyperText Transfer Protocol'
 * 	- it's a format (of various) defining data being transferred via TCP/IP
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
 * Magic String:
 * 	- a string that has some special meaning in our code
 * 	- this is bad because it makes it easy for a typo to cause a bug, and
 * 		hard for tools to help us find it
 *
 * Method Chaining:
 * 	- a method returns an object so we can keep calling more methods
 * 	- sometimes it returns the parent object (called 'cascading') and sometimes
 * 		some other Object
 *
 * MIME Type:
 * 	- a standard for specifying the type of data being sent
 * 	- stands for 'Multipurpose Internet Mail Extensions'
 * 	- ex: applications/json, text/html, image/jpeg
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
 * Non-Blocking:
 * 	- Doing other things without stopping your programming from running
 * 	- this is made possible by node's doing things asynchronously
 *
 * Object:
 * 	- a collection of name/value pairs
 * 	- the simplest definition when talking about javascript
 * 	- ref: section4/D4_ObjectLiterals/
 *
 * Pipe:
 * 	- connecting two streams by writing to one stream what is being read
 * 		from another
 * 	- in node you pipe from a readable stream to a writable stream
 * 	- ex: section6/F9_Streams
 *
 * Port:
 * 	- once a computer receives a packet, how it knows what program to send it to
 * 	- when a program is setup on the operating system to receive packets from a
 * 		a particular port, it is said that the program is 'listening' to that port
 *
 * Protocol:
 * 	- a set of rules two sides agree on to use when communicating
 * 	- both the client and server are programmed to understand and use that
 * 		particular set of rules. It's similar to two people from different
 * 		countries agreeing on a language to speak in
 * 	- ex: TCP/IP (Transmission Control Protocol/Internet Protocol) is the basic
 * 				communication language or protocol of the Internet. It can also be used
 * 				as a communications protocol in a private network (either an intranet
 * 				or an extranet)
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
 *
 * Stream:
 * 	- a sequence of data made available over time
 * 	- pieces of data that eventually combine into a whole
 * 	- ex: watching a video, we are streaming small amounts of the video at once
 *
 * Synchronous:
 * 	- one process executing at a time
 * 	- JavaScript is synchronous. Think of it as only one line of code executing
 * 		at a time.
 * 	- nodejs is asynchronous
 *
 * Syntactic Sugar:
 * 	- a feature that only changes how you type something, but nothing changes
 * 		under the hood
 * 	- it's important to understand what is happening under the hood, so we don't
 * 		make decisions based on flawed assumptions
 *
 * Template:
 * 	- text designed to be the basis for final text or content after being processed
 * 	- there's usually some specific template language, so the template system knows
 * 		how to replace placeholders with real values
 * 		
 * Template Literal:
 * 	- a way to concatenate strings in JavaScript (ES6)
 * 	- easier to work with than a bunch of strings concatenated with '+'
 * 	- ref: section5/E7_ES6TemplateStrings
 */
