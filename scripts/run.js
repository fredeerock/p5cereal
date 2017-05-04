var liveReload = require('livereload');
var lr = require('inject-lr-script-stream');
var filed = require('filed');
var http = require('https');

var liveReloadServer = liveReload.createServer().watch(__dirname + "../" + dirp5);

var server = http.createServer((req, res) => {
  filed(__dirname + "../" + dirp5)
    .pipe(lr())
    .pipe(res)
})

server.listen(8000);