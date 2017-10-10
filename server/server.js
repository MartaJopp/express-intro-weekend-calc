
// Require express:
var express = require('express');

// call the function express
var app = express();
var port = 5000;

// express static file serving - public is the file name
app.use(express.static('server/public'));

// start up our server
app.listen(port, function(){
    console.log('listening on port', port);
});
