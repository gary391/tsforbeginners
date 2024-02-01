// Interface for array, which can be of two types numeric index and string based index

// Student name array interface where the index are numbers and each elements are strings. 

interface StudentName{
    [index:number]:string;
}

// String index based array interface
// var studentNames: StudentName =["John", "Bob", 2]; 
var studentNames: StudentName =["John", "Bob", "Doug", "Tim"];
var studentRole: StudentName = ["Admin", "Captin", "Gaurd", "Cook"]


interface StudentScore{
    [index:string]:number; // Here the number type can be anything, just that the index here is string. 
}
// Here we are using string as the index instead of number 
// We will have to use the for in loop

var studentScores: StudentScore ={}; // This is an object internally

studentScores["John"]= 100;
studentScores["Bob"]= 90;
studentScores["Doug"]= 80;

for (var item in studentScores){
    console.log(item);
    console.log(studentScores[item]);
}
var studentSalary: StudentScore ={};
studentSalary["Mike"] = 5000;
studentSalary["Dike"] = 2000;
studentSalary["Tike"] = 10000;

for (var i in studentSalary){
    // console.log(i);
    console.log(studentSalary[i]);
}