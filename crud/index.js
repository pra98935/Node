var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    // res.render('login');
    res.render('login');
});

app.get('/signup', function(req, res){
    res.render('signup');
});

app.get('/resetpassword', function(req, res){
    res.render('resetPassword');
});

app.listen(3000);