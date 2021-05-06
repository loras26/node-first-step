const chalk = require('chalk');
const greet = require('./greet');
const styledMessage = chalk.bgGreen.black(greet('pupu'));
console.log(styledMessage)
//console.log(greet('pupu'))
