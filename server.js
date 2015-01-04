var express = require('express');
// var bodyParser = require('bodyParser');

var app = express();

var port = process.env.PORT || 3000;
var url = process.env.URL || 'localhost';

app.get('/', function(req, res){
	//call the functions for the database here
  res.send("derp");
});

app.get('/api/emailList', function(req, res){
	//call the functions for the database here
  res.send([
	  {
	    "from": "TicketFactory",
	    "date": 1400956671914,
	    "subject": "Your confirmation #W45021238038",
	    "id": 50223456
	  },
	  {
	    "from": "TravisCI",
	    "date": 1400956671914,
	    "subject": "[Passed] conditionizr/conditionizr#1 (v0.1.0 - edd6500)",
	    "id": 10824581
	  },
	  {
	    "from": "GitHub",
	    "date": 1400956671914,
	    "subject": "New repo 'conditionizr' created",
	    "id": 90345551
	  },
	  {
	    "from": "Google Feedburner",
	    "date": 1400956671914,
	    "subject": "New subscription",
	    "id": 74838344
	  }
	]);
});

app.get('/api/emails', function(req, res){
	//call the functions for the database here
  res.send(JSON.stringify(sql));
});


app.listen(port, url);

console.log("Node test server running on port 3000");




 

 

