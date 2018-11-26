var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/plain'});
    var getText = fs.createReadStream(__dirname+'/read.txt', 'utf-8');
    getText.pipe(res);
    //res.end();
});

server.listen(8000);