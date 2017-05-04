var fs = require("fs");
var request = require('request');
var http = require('https');

var dirp5 = "web";
var dirarduino = "arduino";
var dirnode = "node";

if (!fs.existsSync("../"+dirp5)){
    fs.mkdirSync("../"+dirp5);
}

if (!fs.existsSync("../"+dirarduino)){
    fs.mkdirSync("../"+dirarduino);
}

fs.createReadStream(dirarduino+"/"+dirarduino+".ino").pipe(fs.createWriteStream("../"+dirarduino+"/"+dirarduino+".ino"));
fs.createReadStream(dirp5+"/sketch.js").pipe(fs.createWriteStream("../"+dirp5+"/sketch.js"));
fs.createReadStream(dirp5+"/index.html").pipe(fs.createWriteStream("../"+dirp5+"/index.html"));

http.get("https://raw.githubusercontent.com/vanevery/p5.serialport/master/lib/p5.serialport.js", function(response) {
  response.pipe(fs.createWriteStream("../"+dirp5+"/p5.serialport.js"));
});

var options = {
  url: 'https://api.github.com/repos/processing/p5.js/releases/latest',
  followAllRedirects: true,
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    var p5minjsurl = info.assets[3].browser_download_url;
    request(p5minjsurl).pipe(fs.createWriteStream("../"+dirp5+"/p5.min.js"))
  }
}

request(options, callback);
