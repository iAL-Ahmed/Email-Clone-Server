var express = require('express');
// var bodyParser = require('bodyParser');

var app = express();

var port = process.env.PORT || 3000;
var url = process.env.URL || 'localhost';

app.use(function(req, res, next) { 
	res.header('Access-Control-Allow-Origin', '*'); 
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'); 
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	if ('OPTIONS' == req.method) {
		res.send(200); 
	} 
	else { 
		next(); 
	} 
});

app.get('/api/emailList', function(req, res){
	//call the functions for the database here
  	res.status(200).send(emailList);
});

app.get('/api/emails/:id', function(req, res){
	//call the functions for the database here
  	res.send(200, emails[req.params.id]);
});






var emailList = [
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
	]

var emails = {
	'10824581': {
	  "from": "TravisCI",
	  "date": 1400956671914,
	  "subject": "[Passed] conditionizr/conditionizr#1 (v0.1.0 - edd6500)",
	  "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies nibh eget magna gravida, aliquam interdum nisi fringilla. Suspendisse egestas ligula eget leo vestibulum condimentum. Pellentesque at rutrum quam. Donec convallis risus ut nisl rhoncus, eu luctus leo varius. Suspendisse posuere imperdiet commodo. Suspendisse potenti. Nulla consequat, lectus sed scelerisque sodales, nunc urna rutrum tortor, sed sagittis ipsum orci non velit. Nam rutrum ipsum cursus, egestas ligula non, lacinia elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut augue ultricies, volutpat massa ac, mollis velit. Praesent nec accumsan enim, eget vehicula est. Duis nec metus molestie, placerat eros sed, feugiat mi. Nullam interdum volutpat eros, fermentum fermentum nulla eleifend sit amet. Cras ut arcu neque.</p><p>Nullam posuere, erat non bibendum commodo, lacus elit scelerisque felis, id eleifend lorem nulla eget est. Vestibulum quis turpis enim. Nunc porttitor non leo at interdum. In non neque ut leo posuere lobortis. Ut eget neque leo. Suspendisse lobortis mauris eget rhoncus venenatis. Maecenas at ligula ut quam interdum laoreet. Nullam dictum, tortor id elementum eleifend, arcu sem placerat sem, in tincidunt risus augue ac diam. Phasellus tristique lectus tortor, a malesuada nulla aliquet vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec dictum est, at lobortis lacus. Pellentesque iaculis mi metus. Pellentesque pulvinar dui dolor, id pellentesque nibh lobortis at. Nunc ac varius tortor.</p><p>Donec interdum quam vel erat gravida, vitae pulvinar lorem commodo. Quisque rutrum, enim et sollicitudin lobortis, nunc nisl tincidunt nunc, vitae lacinia turpis nisl non mi. Morbi in mi lectus. Vivamus velit libero, ultricies vel lacinia elementum, eleifend in elit. Donec vestibulum scelerisque velit, id tempor nunc dignissim sed. Integer dictum vel sem vitae rhoncus. Cras sit amet diam gravida, lobortis sem at, mollis elit. Mauris viverra magna nisi, quis tempor augue iaculis nec.</p>",
	  "id": 10824581
	},

	'50223456': {
	  "from": "TicketFactory",
	  "date": 1400956671914,
	  "subject": "Your confirmation #W45021238038",
	  "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies nibh eget magna gravida, aliquam interdum nisi fringilla. Suspendisse egestas ligula eget leo vestibulum condimentum. Pellentesque at rutrum quam. Donec convallis risus ut nisl rhoncus, eu luctus leo varius. Suspendisse posuere imperdiet commodo. Suspendisse potenti. Nulla consequat, lectus sed scelerisque sodales, nunc urna rutrum tortor, sed sagittis ipsum orci non velit. Nam rutrum ipsum cursus, egestas ligula non, lacinia elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut augue ultricies, volutpat massa ac, mollis velit. Praesent nec accumsan enim, eget vehicula est. Duis nec metus molestie, placerat eros sed, feugiat mi. Nullam interdum volutpat eros, fermentum fermentum nulla eleifend sit amet. Cras ut arcu neque.</p><p>Nullam posuere, erat non bibendum commodo, lacus elit scelerisque felis, id eleifend lorem nulla eget est. Vestibulum quis turpis enim. Nunc porttitor non leo at interdum. In non neque ut leo posuere lobortis. Ut eget neque leo. Suspendisse lobortis mauris eget rhoncus venenatis. Maecenas at ligula ut quam interdum laoreet. Nullam dictum, tortor id elementum eleifend, arcu sem placerat sem, in tincidunt risus augue ac diam. Phasellus tristique lectus tortor, a malesuada nulla aliquet vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec dictum est, at lobortis lacus. Pellentesque iaculis mi metus. Pellentesque pulvinar dui dolor, id pellentesque nibh lobortis at. Nunc ac varius tortor.</p><p>Donec interdum quam vel erat gravida, vitae pulvinar lorem commodo. Quisque rutrum, enim et sollicitudin lobortis, nunc nisl tincidunt nunc, vitae lacinia turpis nisl non mi. Morbi in mi lectus. Vivamus velit libero, ultricies vel lacinia elementum, eleifend in elit. Donec vestibulum scelerisque velit, id tempor nunc dignissim sed. Integer dictum vel sem vitae rhoncus. Cras sit amet diam gravida, lobortis sem at, mollis elit. Mauris viverra magna nisi, quis tempor augue iaculis nec.</p>",
	  "id": 50223456
	},

	'74838344': {
	  "from": "Google Feedburner",
	  "date": 1400956671914,
	  "subject": "New subscription",
	  "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies nibh eget magna gravida, aliquam interdum nisi fringilla. Suspendisse egestas ligula eget leo vestibulum condimentum. Pellentesque at rutrum quam. Donec convallis risus ut nisl rhoncus, eu luctus leo varius. Suspendisse posuere imperdiet commodo. Suspendisse potenti. Nulla consequat, lectus sed scelerisque sodales, nunc urna rutrum tortor, sed sagittis ipsum orci non velit. Nam rutrum ipsum cursus, egestas ligula non, lacinia elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut augue ultricies, volutpat massa ac, mollis velit. Praesent nec accumsan enim, eget vehicula est. Duis nec metus molestie, placerat eros sed, feugiat mi. Nullam interdum volutpat eros, fermentum fermentum nulla eleifend sit amet. Cras ut arcu neque.</p><p>Nullam posuere, erat non bibendum commodo, lacus elit scelerisque felis, id eleifend lorem nulla eget est. Vestibulum quis turpis enim. Nunc porttitor non leo at interdum. In non neque ut leo posuere lobortis. Ut eget neque leo. Suspendisse lobortis mauris eget rhoncus venenatis. Maecenas at ligula ut quam interdum laoreet. Nullam dictum, tortor id elementum eleifend, arcu sem placerat sem, in tincidunt risus augue ac diam. Phasellus tristique lectus tortor, a malesuada nulla aliquet vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec dictum est, at lobortis lacus. Pellentesque iaculis mi metus. Pellentesque pulvinar dui dolor, id pellentesque nibh lobortis at. Nunc ac varius tortor.</p><p>Donec interdum quam vel erat gravida, vitae pulvinar lorem commodo. Quisque rutrum, enim et sollicitudin lobortis, nunc nisl tincidunt nunc, vitae lacinia turpis nisl non mi. Morbi in mi lectus. Vivamus velit libero, ultricies vel lacinia elementum, eleifend in elit. Donec vestibulum scelerisque velit, id tempor nunc dignissim sed. Integer dictum vel sem vitae rhoncus. Cras sit amet diam gravida, lobortis sem at, mollis elit. Mauris viverra magna nisi, quis tempor augue iaculis nec.</p>",
	  "id": 74838344
	},

	'90345551': {
	  "from": "GitHub",
	  "date": 1400956671914,
	  "subject": "New repo 'conditionizr' created",
	  "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies nibh eget magna gravida, aliquam interdum nisi fringilla. Suspendisse egestas ligula eget leo vestibulum condimentum. Pellentesque at rutrum quam. Donec convallis risus ut nisl rhoncus, eu luctus leo varius. Suspendisse posuere imperdiet commodo. Suspendisse potenti. Nulla consequat, lectus sed scelerisque sodales, nunc urna rutrum tortor, sed sagittis ipsum orci non velit. Nam rutrum ipsum cursus, egestas ligula non, lacinia elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut augue ultricies, volutpat massa ac, mollis velit. Praesent nec accumsan enim, eget vehicula est. Duis nec metus molestie, placerat eros sed, feugiat mi. Nullam interdum volutpat eros, fermentum fermentum nulla eleifend sit amet. Cras ut arcu neque.</p><p>Nullam posuere, erat non bibendum commodo, lacus elit scelerisque felis, id eleifend lorem nulla eget est. Vestibulum quis turpis enim. Nunc porttitor non leo at interdum. In non neque ut leo posuere lobortis. Ut eget neque leo. Suspendisse lobortis mauris eget rhoncus venenatis. Maecenas at ligula ut quam interdum laoreet. Nullam dictum, tortor id elementum eleifend, arcu sem placerat sem, in tincidunt risus augue ac diam. Phasellus tristique lectus tortor, a malesuada nulla aliquet vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec dictum est, at lobortis lacus. Pellentesque iaculis mi metus. Pellentesque pulvinar dui dolor, id pellentesque nibh lobortis at. Nunc ac varius tortor.</p><p>Donec interdum quam vel erat gravida, vitae pulvinar lorem commodo. Quisque rutrum, enim et sollicitudin lobortis, nunc nisl tincidunt nunc, vitae lacinia turpis nisl non mi. Morbi in mi lectus. Vivamus velit libero, ultricies vel lacinia elementum, eleifend in elit. Donec vestibulum scelerisque velit, id tempor nunc dignissim sed. Integer dictum vel sem vitae rhoncus. Cras sit amet diam gravida, lobortis sem at, mollis elit. Mauris viverra magna nisi, quis tempor augue iaculis nec.</p>",
	  "id": 90345551
	}
}
app.listen(port, url);

console.log("Node test server running on port 3000");




 

 

