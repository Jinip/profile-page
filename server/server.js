var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.listen("8080", function(err){
    if (err) console.log(err);
    console.log("serving on 8080");
});