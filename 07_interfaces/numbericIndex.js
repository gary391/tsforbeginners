// Interface for array, which can be of two types numeric index and string based
// index
var carBrand = ["Tesla", "Toyota", "GMC", "BYD"];
// String index based array interface
// var studentNames: StudentName =["John", "Bob", 2]; 
var studentNames = ["John", "Bob", "Doug", "Tim"];
var studentRole = ["Admin", "Captin", "Gaurd", "Cook"];
for (var i in studentNames) {
    console.log("studentNames: ".concat(studentNames[i]));
}
console.log("-------------------------------");
console.log("-------------------------------");
for (var i in studentRole) {
    console.log("studentRole: ".concat(studentRole[i]));
}
console.log("-------------------------------");
console.log("-------------------------------");
// Here we are using string as the index instead of number 
// We will have to use the for in loop
var studentScores = {}; // This is an object internally / similar to dictionaries in python.
studentScores["John"] = 100;
studentScores["Bob"] = 90;
studentScores["Doug"] = 80;
studentScores["James"] = 86;
for (var item in studentScores) {
    console.log("item: ".concat(item));
    console.log("studentScores: ".concat(studentScores[item]));
}
console.log("-------------------------------");
console.log("-------------------------------");
var studentSalary = {};
studentSalary["Mike"] = 5000;
studentSalary["Dike"] = 2000;
studentSalary["Tike"] = 10000;
console.log("-------------------------------");
console.log("-------------------------------");
for (var i in studentSalary) {
    // console.log(i);
    console.log("studentSalary: ".concat(studentSalary[i]));
}
var studentSubject = {};
studentSubject["Math"] = 90;
studentSubject["English"] = 85;
studentSubject["Science"] = 98;
console.log("-------------------------------");
for (var i_1 in studentSubject) {
    console.log("studentSubject: ".concat(i_1, " ") + " ".concat(studentSubject[i_1]));
}
console.log("-------------------------------");
console.log("-------------------------------");
var carBrand = {};
carBrand[1] = "Toyota";
carBrand[2] = "Tesla";
carBrand[3] = "Honda";
for (var i_2 in carBrand) {
    // console.log(i);
    console.log("number ".concat(i_2, " carBrand: ").concat(carBrand[i_2]));
}
console.log("-------------------------------");
console.log("-------------------------------");
