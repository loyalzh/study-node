//加载模块
var student = require("./student");
var teacher = require("./teacher");
//使用模块

function add(teacherName,students) {
    teacher.add(teacherName);
    students.forEach(function (e,i) {
        student.add(e)
    }) 
    
}
module.exports.add = add