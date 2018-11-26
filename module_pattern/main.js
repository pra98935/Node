var moduleStuff = require('./moduleStuff');
// require('./moduleStuff'); File name
// var moduleStuff, File name because lots of export variable and function

console.log(moduleStuff.counter(['hello', 'hi']));
console.log(moduleStuff.add(6,6));
console.log(moduleStuff.add(6,moduleStuff.pi));
console.log(moduleStuff.minus(8,6));