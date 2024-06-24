// Here the value that is returned by prompt is a string.
var x = prompt("Enter a number:");
console.log(x + 3); // This will return string+3 instead of numerically added it.
// For typecasting using the parseInt and parseFloat methods
var y = parseInt(prompt("Enter a number to be typecast:"));
// parseInt will convert the string value to numerica value which is then assigned to a 
// y which is of type number.
console.log(y + 3);
var z = parseFloat(prompt("Enter a number to be typecast:"));
// parseInt will convert the string value to numerica value which is then assigned to a 
// y which is of type number.
console.log(z + 3.5);
// toString - Convert any data type to a string using toString
var courses = ['Jave', "React", "Express"];
// This will convert the array into a string 
// You can also manipulate this string as well.
console.log(courses.toString());
var mybool = false; // Boolean value
var new_mybool = mybool.toString();
console.log(new_mybool);
