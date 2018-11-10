"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) { res.send("Hello from Express!"); });
app.get('/products', function (req, res) {
    console.log("Received request for " + req.path);
    res.send("Received request for products...");
});
app.get('/reviews', function (req, res) {
    res.send("Received request for reviews...");
});
var server = app.listen(8000, "localhost", function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log("Listening on http://localhost:" + port);
});
