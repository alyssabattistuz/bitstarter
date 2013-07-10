var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

//var file = 'index.html';

var buffer = fs.readFileSync('index.html', 'utf-8');

var message = 'here';

/*fs.exists(file, function(exists) {
  if(exists) {
    fs.stat(file, function(error, stats) {
      fs.open(file, 'r', function(error, fd) {
        var buffer = new Buffer(stats.size);
        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
          var data = buffer.toString('utf8', 0, buffer.length);
          console.log(data);

          app.get('/', function(request, response) {
            response.send(data));
          });

          fs.close(fd);

          });
        });
      });
    }
});*/

app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
