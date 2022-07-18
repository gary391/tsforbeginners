// Arrow function 
// Using arrow function print hello!
// The arrow function is assigned to a variable hello, that variable can be used in a
// similar fashion to envoke a regular function. 
// var hello = ():string =>{
//     return "Hello!";
// };
// console.log(hello())
// How pass parameter to an arrow function 
var hello = function (name) {
    return "Hello! " + name;
};
console.log(hello('Gamma'));
// Write a arrow function that will calculate the product of two numbers
var product = function (num1, num2) {
    return num1 * num2;
};
console.log("Product is: ", product(10, 22));
// How to push ten Arrow function on to an arrays
// Invoke all those 10 arrow function using a loop again
// create a variable array type is any as it is carrying function 
var myarray = [];
for (var i = 0; i < 10; i++) {
    //<array>.push(Arrow function) which returns index of an array
    myarray.push(function () { return i; });
}
// This how you invoke the function stored in the array.
for (var i = 0; i < 10; i++) {
    console.log(myarray[i]);
    console.log(myarray[i]());
}
