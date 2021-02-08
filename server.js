//Require dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

//create express server and set port to 8080

var app = express();
var PORT = process.env.PORT || 8080;

//set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//start the server
app.listen(PORT, function() {
    console.log("You are now listening on port: " + PORT);
});
