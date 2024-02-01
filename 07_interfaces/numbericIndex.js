// Interface for array, which can be of two types numeric index and string based index
// String index based array interface
// var studentNames: StudentName =["John", "Bob", 2]; 
var studentNames = ["John", "Bob", "Doug", "Tim"];
var studentRole = ["Admin", "Captin", "Gaurd", "Cook"];
// Here we are using string as the index instead of number 
var studentScores = {}; // This is an object internally
studentScores["John"] = 100;
studentScores["Bob"] = 90;
studentScores["Doug"] = 80;
for (var item in studentScores) {
    console.log(item);
    console.log(studentScores[item]);
}
var studentSalary = {};
studentSalary["Mike"] = 5000;
studentSalary["Dike"] = 2000;
studentSalary["Tike"] = 10000;
for (var i in studentSalary) {
    console.log(i);
    console.log(studentSalary[i]);
}
