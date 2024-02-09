// Interface for array, which can be of two types numeric index and string based
// index

// Student name array interface where the index are numbers and each elements 
//are strings. 

interface StudentName{
    // Here we are defining what type of index we want for our interface.
    // in this example we are using number as the index type
    // also define what kind of data is defined in the array.
    // index can be i or ind etc.
    [index:number]:string;
}

// String index based array interface
// var studentNames: StudentName =["John", "Bob", 2]; 
var studentNames: StudentName =["John", "Bob", "Doug", "Tim"];
var studentRole: StudentName = ["Admin", "Captin", "Gaurd", "Cook"]

for (var i in studentNames){
    console.log(`studentNames: ${studentNames[i]}`);
}
console.log("-------------------------------")
console.log("-------------------------------")
for (var i in studentRole){
    console.log(`studentRole: ${studentRole[i]}`);
}
console.log("-------------------------------")
console.log("-------------------------------")
interface StudentScore{
    // Here the number type can be anything, just that the index here is string. 
    [index:string]:number; 
}
// Here we are using string as the index instead of number 
// We will have to use the for in loop

var studentScores: StudentScore ={}; // This is an object internally / similar to dictionaries in python.

studentScores["John"]= 100;
studentScores["Bob"]= 90;
studentScores["Doug"]= 80;


for (var item in studentScores){
    console.log(`item: ${item}`);
    console.log(`studentScores: ${studentScores[item]}`);
}
console.log("-------------------------------")
console.log("-------------------------------")

var studentSalary: StudentScore ={};
studentSalary["Mike"] = 5000;
studentSalary["Dike"] = 2000;
studentSalary["Tike"] = 10000;
console.log("-------------------------------")
console.log("-------------------------------")
for (var i in studentSalary){
    // console.log(i);
    console.log(`studentSalary: ${studentSalary[i]}`);
}

var studentSubject: StudentScore = {};
studentSubject["Math"] = 90;
studentSubject["English"] = 85;
studentSubject["Science"] = 98;

console.log("-------------------------------")
for(let i in studentSubject){
    console.log(`studentSubject: ${i} ` + ` ${studentSubject[i]}`);
}