var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html', 'utf-8');
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html', 'utf-8');
});

app.get('/profile/:name', function(req, res){
    // res.send(req.params.name);
    var info = {
        city:'gwalior',
        hobbies:['dancing','sleeping']
    }
    res.render('profile', {person:req.params.name, data:info});
});

app.get('*', function(req, res){
    res.sendFile(__dirname + '/404.html', 'utf-8');
})

app.listen(3000);