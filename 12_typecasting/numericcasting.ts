// Here the value that is returned by prompt is a string.
let x:string = prompt("Enter a number:"); 
console.log(x+3); // This will return string+3 instead of numerically added it.


// For typecasting using the parseInt and parseFloat methods

let y:number = parseInt(prompt("Enter a number to be typecast:"));
// parseInt will convert the string value to numerica value which is then assigned to a 
// y which is of type number.
console.log(y+3)

let z:number = parseFloat(prompt("Enter a number to be typecast:"));
// parseInt will convert the string value to numerica value which is then assigned to a 
// y which is of type number.
console.log(z+3.5)

// toString - Convert any data type to a string using toString

let courses = ['Jave', "React", "Express"];
// This will convert the array into a string 
// You can also manipulate this string as well.
console.log(courses.toString()) 


let mybool = false; // Boolean value
let new_mybool:string = mybool.toString();
console.log(new_mybool);
