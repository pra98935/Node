var http = require('http');
var fs = require('fs');

var getText = fs.createReadStream(__dirname + '/read.txt', 'utf-8');
var renderText = fs.createWriteStream(__dirname + '/write.txt');
getText.pipe(renderText);