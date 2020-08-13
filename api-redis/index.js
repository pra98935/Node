var express = require('express');
var app = express();

var bodyParser = require('body-parser'); //master changes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// var redis = require("redis"),
// client = redis.createClient();
// client.on('connect', function() {
//     console.log('connected');
// });

var apiPath = require('./routes/api');
app.use('/api', apiPath);

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.listen('3000');