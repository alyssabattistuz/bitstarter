var express = require('express');

var app = express.createServer(express.logger());

fs = require('fs');

var buffer = fs.readFileSync('index');

var message = buffer.toString('utf8', 0, len);

app.get('/', function(request, response) {
  response.send(message));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
