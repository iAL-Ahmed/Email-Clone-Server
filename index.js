var express = require('express');
// var bodyParser = require('bodyParser');

var app = express();

var port = process.env.PORT || 3000;
var url = process.env.URL || 'localhost';


app.get('/api/emailList', function(req, res){
	//call the functions for the database here
  res.send(JSON.stringify(sql));
});

app.get('/api/emails', function(req, res){
	//call the functions for the database here
  res.send(JSON.stringify(sql));
});


app.listen(port, url);

console.log("Node test server running on port 3000");




 

 

