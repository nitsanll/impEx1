var express = require('express');
var app = express();
var grades = require('./stud_grades');
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
mongoose.connect('mongodb://db_user:db_pass@ds023500.mlab.com:23500/grades_nitsan');
var conn = mongoose.connection;


conn.on('error', function(err){
    console.log('connection error' + err);
});

conn.once('open', function(){
    console.log('connected to Mlab'); 
});

app.get('/getAllStud', function(req,res){
  grades.getAllStud(function(data){
    res.json(data);
  });
});

app.get('/getStudById/:studId', function(req,res){
  grades.getStudById(req.params.studId, function(data){
    res.json(data); 
  });
});

app.get('/getStudByYear/:year', function(req,res){
  grades.getStudByYear(req.params.year, function(data){
    res.json(data);
  });
});

app.listen(port);
console.log('listening on port ' + port);
