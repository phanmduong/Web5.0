<<<<<<< HEAD
'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname));

http.listen(6969, function(){
  console.log('Server started. Listening on *:6969');
=======
'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname));

http.listen(6969, function(){
  console.log('Server started. Listening on *:6969');
>>>>>>> b763d044d2a539ef6982ea1f1756792e2dccfe73
});