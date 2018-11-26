var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res){
    
    console.log(req.url);

    if(req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'});
        var getText = fs.createReadStream(__dirname + '/index.html', 'utf-8');
        getText.pipe(res);
    }else if(req.url.match("\.css$")){

        // Load all Css file 
        var cssPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(cssPath, 'utf-8');
        res.writeHead(200, {'content-type':'text/css'});
        fileStream.pipe(res);

        // Load Manually CSS file
        // var fileStream1 = fs.createReadStream(__dirname + '/main.css', 'utf-8');
        // var fileStream2 = fs.createReadStream(__dirname + '/style.css', 'utf-8');
        // res.writeHead(200, {'content-type':'text/css'});
        // fileStream1.pipe(res);
        // fileStream2.pipe(res);
    }else if(req.url.match('\.jpg$')){
        var imgPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imgPath);
        res.writeHead(200, {'content-type':'image/jpg'});
        fileStream.pipe(res);
    }

});

server.listen(8000);