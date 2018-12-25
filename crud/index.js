var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(req, res){
    // res.render('login');
    res.render('login');
});

app.get('/signup', function(req, res){
    res.render('signup');
});

app.post('/signup', urlencodedParser, function(req, res){
    userInfo = {
        'name':req.body.name,
        'country':req.body.country,
        'state':req.body.state,
        'hobby':req.body.hobby,
        'gender':req.body.gender,
        'profile':req.body.profile,
        'email':req.body.email,
        'pswd':req.body.pswd,
        'address':req.body.address,
        'remember':req.body.remember
    }
    console.log(userInfo);
    res.render('signup.ejs', {data:userInfo});
});

app.get('/resetpassword', function(req, res){
    res.render('resetPassword');
});

app.listen(3000);