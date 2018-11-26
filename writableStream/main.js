var http = require('http');
var fs = require('fs');

var getStream = fs.createReadStream(__dirname + '/read.txt', 'utf-8');
var renderStream = fs.createWriteStream(__dirname + '/write.txt');
getStream.on('data', function(chunk){
    console.log(chunk);
    renderStream.write(chunk);
})