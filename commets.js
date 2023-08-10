// Create web server
// Create Database
// Create Table
// Create Data
// Read Data
// Update Data
// Delete Data

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

// Create Web Server
app.listen(3000, () => {
    console.log('Server running at http://
