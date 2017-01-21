var express = require("express");
var app = express();

//For The HTML Template
app.use(express.static(__dirname + "/public"));

app.listen(3000);
    console.log("Server running on port 3000")
