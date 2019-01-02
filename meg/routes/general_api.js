var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

router.get('/get_all_category', (req, res) => {
    let sqlQuery = "select id, name from meg_category";
    connection.query(sqlQuery, (error, result) => {
        if(result != undefined){
            res.status(200).json({
                "message":"get all categhory",
                result:result
            });
        }else{
            res.status(404).json({
                "message":"Something is wrong",
            });
        }
        
    })
});

router.post('/profile', (req, res) => {
    let user_id = req.body.id;
    let sqlQuery = "select name, email_id, contact, cover_image, address from meg_users where id='"+ user_id +"'";
    connection.query(sqlQuery, (error, result) => {
        if(result != undefined){
            res.status(200).json({
                "message":"Record sucessfully fetched",
                result:result
            });
        }else{
            res.status(400).json({
                "message":"No data found"
            });
        }
    });
})


module.exports = router;