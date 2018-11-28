var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'application/json'});
    var myObj = {
        'name':'prashant',
        'age':27,
        'city':'gwalior'
    }
    res.end(JSON.stringify(myObj));
});

server.listen(8000);