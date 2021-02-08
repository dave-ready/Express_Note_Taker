//Require dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

//create express server and set port to 8080

var app = express();
var PORT = process.env.PORT || 8080;
