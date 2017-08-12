// Node静态服务
var http = require("http");
var express = require("express");
var serveStatic = require('serve-static');

var app = new express();

app.use(serveStatic(__dirname + '/'));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/database.html");
})
app.listen(1337, "localhost");
console.log("listening port 1337");