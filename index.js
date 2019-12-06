//import express module
var express = require('express');
//create an express app
var app = express();

const path = require('path');
app.use(express.static('public'));

 //add a callback function to handle
 //get request on the root
app.get('/', function(req, res) {
 res.sendFile(path.join(dirname+'/Webpages -HTML/Homepage.html'));
 
});
app.get('/', function(req, res) {
 res.sendFile(path.join(dirname+'/Webpages -HTML/Products.html'));
 
});

app.get('/', function(req, res) {
 res.sendFile(path.join(dirname+'/Webpages -HTML/Our Team.html'));
 
});
 
app.get('/', function(req, res) {
 res.sendFile(path.join(dirname+'/Webpages -HTML/Contact Us.html'));
 
});
 
app.get('/', function(req, res) {
 res.sendFile(path.join(dirname+'/Webpages -HTML/Admin Login.html'));
 
});
 //run the server on port 3000 
app.listen(3000);
