var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node_meg'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

router.get('/', (req, res) => {
       //res.send('hello');
       connection.query("SELECT name, email_id FROM meg_users", function (err, result, fields) {
        if (err) throw err;
        res.status(200).json({
            message:"success",
            result:result
        });
    });
});

router.post('/', (req, res) => {
    console.log(req.body.lang_type);

    let method = req.body.method;

    if(method=='addUsers'){
        let name = req.body.name; 
        let email_id = req.body.email_id;
        let password = req.body.password;
        let device_id= req.body.device_id;
        let lang_type = req.body.lang_type; 
        let location = req.body.location; 
        let latitude = req.body.latitude;
        let longitude = req.body.longitude;

        let sqlQuery = "INSERT INTO meg_users (name, email_id, password, device_id, lang_type, location, latitude, longitude) VALUES ('"+name+"', '"+email_id+"', '"+password+"', '"+device_id+"', '"+lang_type+"', '"+location+"', '"+latitude+"', '"+longitude+"')";
        connection.query(sqlQuery, (erroe, result) => {
            res.status(200).json({
                message:"User register successfully",
                result:result
            })
        });
    }else{
        res.status(404).json({
            message:"Something is going wrong"
        })
    }
});

router.post('/updatepassword', (req, res) => {
    let newPassword = rq.body.newPassword;
    let email_id = req.body.email_id;

    let sqlQuery = "UPDATE meg_users SET password = '"+ newPassword +"' WHERE email_id='"+ email_id +"'";

})

module.exports = router;