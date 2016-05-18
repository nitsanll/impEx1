var mongoose = require('mongoose');
var Student = require('../student');

exports.getAllStud = function(callback){
    var query = Student.find({});
    query.exec(function(err,student){
        if(err) throw err;
        callback(student);
    }); 
}

//get a specific student details 
exports.getStudById = function(id1, callback){
    var query =  Student.find({}).where('id', id1);
    query.exec(function(err,student){
        if(err) throw err;
        callback(student);
    });
}

//get number of student's details by a specific year
exports.getStudByYear = function(year1, callback){
    var query =  Student.find({}).where('year', year1);
    query.exec(function(err,student){
        if(err) throw err;
        callback(student);
    });
}  
