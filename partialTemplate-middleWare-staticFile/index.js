var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));
// app.use('/assets1', express.static('assets')); // this code also work no need to folder name same at first place

app.get('/', function(req, res){
    res.render('home')
})

app.get('/contact', function(req, res){
    res.render('contact')
})

app.listen(3000);