var express = require('express');
var router = express.Router();

var redis = require('redis');
var client = redis.createClient(); //creates a new client
client.on('connect', function() {
    console.log('connected');
});

router.get('/', (req, res) => {
    client.hgetall('profile-2', function(err, object) {
        res.json(object);
    });
});

router.post('/add', (req, res) => {

    let id = req.body.id;
    let name = req.body.name;
    let age = req.body.age;
    let city = req.body.city;
    let gender = req.body.gender;

    client.exists('profile-'+id, (err, reply) => {
        if (reply === 1) {
            res.json('key is already exists');
        } else {
            client.hmset('profile-'+id, {
                'id': id,
                'name': name,
                'age': age,
                'city': city,
                'gender':gender
            }, (error, reply) => {
                if(error){
                    res.json('something is going wrong');
                }else{
                    res.json('Record Insert Successfuly');
                }
            });
        }
    });
});

router.post('/profile', (req, res) => {
    let id = req.body.id;
    client.exists('profile-'+id, (error, reply) => {
        if(reply===1){
            client.hgetall('profile-'+id, function(err, object) {
                if(err){
                    res.json('Something is going wrong');
                }else{
                    res.json(object);
                }
            });
        }else{
            res.json('Key Is Not Exist');
        }
    });  
});

router.put('/update', (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    let age = req.body.age;
    let city = req.body.city;
    let gender = req.body.gender;

    client.exists('profile-'+id, (err, reply) => {
        if (reply === 1) {
            client.hmset('profile-'+id, {
                'id': id,
                'name': name,
                'age': age,
                'city': city,
                'gender':gender
            }, (error, reply) => {
                if(error){
                    res.json('something is going wrong');
                }else{
                    res.json('Record Update Successfuly');
                }
            });
        } else {
            res.json('Key is not available');
        }
    });
});


router.delete('/delete', (req, res) => {
    let id = req.body.id;
    client.exists('profile-'+id, (err, reply) => {
        if (reply === 1) {
            client.del('profile-'+id, function(err, reply) {
                if(reply===1){
                    res.json('Record Deleted');
                }else{
                    res.json('something is going wrong');
                }
            });            
        } else {
            res.json('Key is not available');
        }
    });
});


module.exports = router;