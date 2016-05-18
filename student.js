var mongoose = require('mongoose');
var schema = mongoose.Schema;
var studentSchema = new schema({
    id: {type:String, index:1, required:true, unique:true},
    name: {type:String, required:true},
    grade: {type:String, required:true},
    year: {type:String, required:true},
}, {collection: 'students'});

var Student = mongoose.model('students', studentSchema);
module.exports = Student;
