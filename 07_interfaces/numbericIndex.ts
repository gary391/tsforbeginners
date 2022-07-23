// Interface for array, which can be of two types numeric index and string based index

// Student name array interface 

interface StudentName{
    [index:number]:string;
}

// String index based array interface
// var studentNames: StudentName =["John", "Bob", 2]; 
var studentNames: StudentName =["John", "Bob", "Doug"];


interface StudentScore{
    [index:string]:number;
}

var studentScores: StudentScore ={}; // This is an object internally

studentScores["John"]= 100;
studentScores["Bob"]= 90;
studentScores["Doug"]= 80;

for (var item in studentScores){
    console.log(item);
    console.log(studentScores[item]);
}