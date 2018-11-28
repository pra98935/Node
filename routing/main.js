var http = require ('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
        console.log(req.url);
    if(req.url === '/' || req.url === '/home'){
        res.writeHead(200, {'content-type':'text/html'});
        var getFileContent = fs.createReadStream(__dirname + '/index.html', 'utf-8');
        getFileContent.pipe(res);
    }else if(req.url === '/contact'){
        res.writeHead(200, {'content-type':'text/html'});
        var getFileContent = fs.createReadStream(__dirname + '/contact.html', 'utf-8');
        getFileContent.pipe(res);
    }else{
        res.writeHead(200, {'content-type':'text/html'});
        var getFileContent = fs.createReadStream(__dirname + '/404.html', 'utf-8');
        getFileContent.pipe(res);
    }
});

server.listen(8000);