// Object in TS are properties that have a key and value. 
// Properties can be functions as well. 

var student = {
    firstName: "John",
    lastName: "Cena",
    id: 45,
    score: 90
};

// How to accces the object ?
// This is done using a dot notation
// console.log(student.name);
// console.log(student.id);
// console.log(student.score);

// How to access properties i.e. keys of the object ?
// How to access properties i.e. values of the object ?
for (var item in student){
    // console.log(item);
    console.log(student[item])
}

// destructuring of object
// property name should match with what is there in the object
var{firstName, lastName} = student;
console.log(firstName+" "+lastName)