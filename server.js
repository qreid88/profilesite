var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// Use session with our app
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'Client')));

// require('./server/config/mongoose.js');
// require('./server/config/routes.js')(app);

var server= app.listen(8000, function(){
	console.log("Server running on 8000")
})
