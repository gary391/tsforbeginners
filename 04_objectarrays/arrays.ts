// How to create an empty array

var emptyarray:Array<any> = [];


// Use Any or add a certain type of element to push new elements in the 
// array

// Hetrogenous type array
var cars:any = ["Toyota", "Mazda", "Tesla", 10];
// var cars:any=["Toyota", "Mazda", "Tesla"];
cars.push("Audi");
cars.push(100);

// for loop 
for(var i=0;i<cars.length;i++){
    console.log(cars[i]);
}
console.log("*******************");
// // name of the subjects
// var subject:any = ["math", "english", "hebrew", "chinese", "german", 10]

// // using push method you can define add more elements to an existing array.
// subject.push("history");
// subject.push(100);

// // for traversing over an array we can use for loop. 
// for(var item=0;i<subject.length;item++){
//     console.log(item);
//     console.log(subject[item]);
// }

// Type any will allow any type of data to be added in the array
var courses:any =["Angular", "React", "ES6", "JMS", "python", 101];

courses.push("Java");

// using push to add elements in an array
courses.push(201);

// for loop to traverse through an array 
// Make sure there is var at the beginning of the loop

for (var i=0; i<courses.length; i++){
    console.log(courses[i]);
}
console.log("*******************");
// Destructuring 
// Assigning individual elements to separate element of the code.
// Similar to unpacking in python!!

var x = courses[0];
var z = courses[1];

var[a,b,c,d]= cars;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log("*******************");
var[x,y,z]= courses;
console.log(x);
console.log(y);
console.log(z);