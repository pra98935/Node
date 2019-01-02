var express = require('express');
var app = express();

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'david_meg'
// });
 
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);
// });

var customerAPIRoutes = require('../meg/routes/customer_api');
var generalAPIRoutes = require('../meg/routes/general_api');

app.use('/customer_api', customerAPIRoutes);
app.use('/general_api', generalAPIRoutes);

app.get('/', (req, res) => {
    res.send('home');
});

app.listen(3000);