// Write a function to print hello!
/*
function <name of the function with '(<parameter>:<type of parameter>)'>:<Return Type> { body of function
    <return>;
}
*/
// parameter 
// function hello(name:string):string {
//     return "Hello World, I am a typescript function! "+name;
// }
// Calling a function in typescript using hello()
// console.log(hello("Gamma")); 
// Need two argument 
function add(num1, num2) {
    return (num1 + num2);
}
console.log("Sum is: " + add(1000, 2000));
// Display function displays information 
// Making a argument optional using ? in that case undefined will be assigned
// to that agrument
// Assigning default value using a equal symbol 
// function display(id:number, name:string, role?:string) {
//     console.log("Id", id);
//     console.log("Name", name);
// // Check for undefined assignment, and display the role only when its is defined
//     if (role!=undefined){
//         console.log("Role", role);
//     }
// }
// // display(1, "gamma", "Admin")
// display(1, "alpha") 
// Assigning default value using a equal symbol and then there is no need to check
// for undefined value. 
// Default value will only be used when you don't pass in any value 
function display(id, name, role) {
    if (role === void 0) { role = "NormalUser"; }
    console.log("Id", id);
    console.log("Name", name);
    // Check for undefined assignment, and display the role only when its is defined
    // if (role!=undefined){
    console.log("Role", role);
    // }
}
// display(1, "gamma", "Admin")
// Here we are not passing in the role value, so the default value will be choosen. 
display(1, "alpha");
// Passing function as a parameter to another function
// If the function doesn't return the value we use a void return type
function calculator(fun) {
    // we need to invoke the function
    console.log(fun(10, 20));
}
// calculator(add);
// Function returning another function 
function calculator_return() {
    function diff(num1, num2) {
        return num1 - num2;
    }
    return diff; // Here the return value is the inner function
}
// var sub = calculator_return();
// We will have invoke the diff function to get the output
// console.log(sub(200,100));
// Shortcut 
// Here calculator_return()  returns diff
// diff(20,5) returns 15 which is displayed using console
console.log(calculator_return()(20, 5));
// Anonymous function
// We can use anonymous function by assigning it to a variable or as a call back func
// to an event handler 
// Assigning to a variable i.e. var "name of variable"
var hello = function (name) {
    return "Hello World, I am a typescript function! " + name;
};
console.log(hello('Gamma'));
