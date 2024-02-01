// Object in TS are properties that have a key and value. 
// Properties can be functions as well. 
//object in TS is a property that has a key and value. 
// car object with properties
var car = {
    make: "mazda",
    model: "626",
    year: 1998
};
// for loop in TS is similar to python 
for (var info in car) {
    console.log(car[info]);
}
// Object in typescript 
var student = {
    firstName: "John",
    lastName: "Cena",
    id: 45,
    score: 90
};
var child = {
    fName: "Beta",
    lName: "Mera",
    age: 6,
    courses: "Maths"
};
console.log(child.fName);
console.log(child.lName);
// How to access the object ?
// This is done using a dot notation
// console.log(student.name);
// console.log(student.id);
// console.log(student.score);
// How to access properties i.e. keys of the object ?
// How to access properties i.e. values of the object ?
for (var item in student) {
    console.log(item);
    // console.log(student[item]);
}
console.log("*******************");
// For in loop 
for (var i in child) {
    console.log(i);
    console.log(child[i]);
}
var fName = child.fName, lName = child.lName, age = child.age, courses = child.courses;
console.log(fName, lName, age, courses);
console.log("*******************");
// destructuring of object
// Unpacking in TS where elements of property should match with the variable. 
// property name should match with what is there in the object
var firstName = student.firstName, lastName = student.lastName;
console.log(firstName + " " + lastName);
