var express = require('express');
var fs = require('fs');
var app = express();

var user = { //test
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
}

app.get('/getUserList', function(req, res){ // test
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
});

app.post('/addUser', function (req, res) { // childbranch2
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
       console.log(JSON.stringify(data));
    });
 })
 
 

var server = app.listen(8000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});