var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/streamfile.txt', 'utf-8');
var myReadStream = fs.createReadStream(__dirname + '/streamfile.txt');
//var myReadStream = fs.readFileSync('streamfile.txt');
myReadStream.on('data', function(chunk){
    console.log(chunk);
    console.log(__filename);
}) 

