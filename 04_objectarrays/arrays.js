// Use Any or add a certain type of element to push new elements in the 
// array
// Hetrogenous type array
var cars = ["Toyota", "Mazda", "Tesla", 10];
// var cars:any=["Toyota", "Mazda", "Tesla"];
cars.push("Audi");
cars.push(100);
// for loop 
for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
// Type any will allow any type of data to be added in the array
var courses = ["Angular", "React", "ES6", "JMS", "python", 10];
courses.push("Java");
// using push to add elements in an array
courses.push(200);
// for loop to traverse through an array 
// Make sure there is var at the beginning of the loop
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
// Destructuring 
// Assigning individual elements to separate element of the code.
// Similar to unpacking in python!!
var x = courses[0];
var z = courses[1];
var a = cars[0], b = cars[1], c = cars[2], d = cars[3];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
var x = courses[0], y = courses[1], z = courses[2];
console.log(x);
console.log(y);
console.log(z);
