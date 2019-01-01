var express = require('express');
var app = express();



const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// create application/json parser


const movieRoutes = require('../api2/routes/movies');
app.use('/movies', movieRoutes);





app.get('/', function(req, res){
    res.send('heelo');
});

app.get('/detail/:id?', function(req, res){
    res.send('detail'+req.params.id);
});

app.listen('3000');