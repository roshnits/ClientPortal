var express = require('express');
var app = express();

app.use(express.static('core'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

});
