// Use Any or add a certain type of element to push new elements in the 
// array

var courses:any =["Angular", "React", "ES6", "JMS", 10];

courses.push("Python");

// using push to add elements in an array
courses.push(200);

// for loop to traverse through an array 
// Make sure there is var at the beginning of the loop

for (var i=0; i<courses.length;i++){
    console.log(courses[i])
}

// Destructuring 
// Assigning individual elements to separate element of the code.
// Similar to unpacking in python!!

var x = courses[0];
var x = courses[1];

var[a,b,c] = courses;
console.log(a);
console.log(b);
console.log(c); 