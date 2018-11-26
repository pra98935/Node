var http = require('http');

// Cretae server way 1
// http.createServer(function(req, res){
//     res.writeHead(200, {'content-type':'text/plain'});
//     res.end('hello');
// }).listen(8000);

// Create server way 2
var server = http.createServer(function(req, res){
    console.log(req.url);
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('hello hi');
});
server.listen(8000);