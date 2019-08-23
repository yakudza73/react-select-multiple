const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const user = require('./user')

app.use(express.static(path.join(__dirname,"/")));
app.use(bodyParser.json());//разбор json
app.use(bodyParser.urlencoded({extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// app.post('/signin', function (req, res) {
//     user.signup('','')
//     console.log(res);

//     var user_name=req.body.email;
//     var password=req.body.password;
//     if(user_name=='admin' && password=='admin'){
//         res.sendStatus(200);
//     }
//     else{
//         res.sendStatus(400);
//         res.send('Failure');
//     }
// })

app.post('/signup', function (req, res) {
    var name=req.body.email;
    var email=req.body.email;
    var password=req.body.password;
   
    if(name && email && password){
        user.signup( email, password)
    }
    else{
      res.send('Failure');
    }
  })

app.listen(7777,function(){
    console.log("Started listening on port localhost:7777", 7777);
})