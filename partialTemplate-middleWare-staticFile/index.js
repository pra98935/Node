var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "simply"
});

app.use('/assets', express.static('assets'));
// app.use('/assets1', express.static('assets')); // this code also work no need to folder name same at first place

app.get('/', function(req, res){
    res.render('home')

    // con.connect(function(err) {
    //     if (err) throw err;
    //     con.query("SELECT * FROM user", function (err, result, fields) {
    //         if (err) throw err;
    //         console.log(result);
    //     });
    // });

})

app.get('/contact', function(req, res){
    res.render('contact')
})

app.listen(3000);