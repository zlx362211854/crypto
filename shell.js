var express = require('express');
var app = express();
var path = require('path');
const {PORT, APIHOST, APIPORT} = process.env;
const server = app.listen(PORT || 7000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('app listening at http://%s:%s', host, port);
});
app.use(express.static(path.join(__dirname, 'dist')));
