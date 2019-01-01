const express = require('express');
const router = express.Router();

const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => {
    console.log('connected');
})

router.get('/', (req, res) => {
    //res.json('get all movie list');
    let getName;
    client.get('movieList', (err, reply) => {
        res.json(reply);
    });
    
    
});

router.post('/addmovie', (req, res, next) => {
  
    var getName = {
        name:req.body.name
    };

    res.status(200).json({
        message:"get movie name",
        getName:getName
    });

    client.set('movieList', req.body.name, function(err, reply) {
        console.log(reply);
    });

    // client.set('movieList', 0, function() {
    //     client.incr('movieList', function(err, reply) {
    //         console.log(reply); // 11
    //     });
    // });
  
});




module.exports = router;