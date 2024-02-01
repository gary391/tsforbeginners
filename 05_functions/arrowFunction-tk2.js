// Arrow function 
// Welcome function using arrow function 
var hello = function (name) {
    return "Hello " + name;
};
console.log(hello("Gamma Mera name$$"));
var helloworldmera = function (name) {
    return "Helloworldmeranamehai " + name;
};
console.log(helloworldmera("Beta"));
// Function to add two numbers 
var add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(12, 4));
// Function to multiple two numbers 
console.log("-----------------------------------");
var mult = function (num1, num2) {
    return (num1 * num2);
};
console.log(mult(2, 5));
// Create a array with ten arrow function 
console.log("-----------------------------------");
// Create an empty array 
var myArray = [];
var meraArray = [];
// For loop with each element of the array is a arrow function
for (var i = 0; i < 10; i++) {
    // console.log(i);
    // pushing an anonymous funtion
    myArray.push(function () {
        return i;
    });
}
// for viewing the array we can use a for loop
for (var i = 0; i < 10; i++) {
    // console.log(myArray[i]);// this will just provide the reference to the function 
    console.log(myArray[i]()); // this will invoke the function. 
}
console.log("Product is ", mult(5, 8));
console.log("-----------------------------------");
