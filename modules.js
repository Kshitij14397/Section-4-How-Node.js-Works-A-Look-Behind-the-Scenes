//# Section 4: How Node.js Works: A Look Behind The Scenes

//# 39. Requiring Modules in Practice

console.log(arguments);
console.log(require("module").wrapper);

//module.exports
//const C = require('./test-module-1')
//const calc1 = new C();
//console.log(calc1.add(2, 7));

//exports
//const calc2 = require("./test-module-2");
//const { add, multiply, divide } = require("./test-module-2");
//console.log(add(2, 7));

//Caching
require('./test-module-3')()
require('./test-module-3')()
require('./test-module-3')()
