// Write a function to print hello!
/*
function <name of the function> (<parameter>:<type of parameter>):<Return Type> { body of function
    <return statement>;
}
*/
// parameter 
function heello(name) {
    return "Hello World, I am a typescript function! " + name;
}
function car(name) {
    return "".concat(name, " is an awesome car!!");
}
function company(name, index) {
    return "".concat(name, " is an FMGC company, listed in ").concat(index);
}
console.log(company('UniLevel', 'nifty'));
// calling a function in typescript using car()
console.log(car('BMW'));
// Calling a function in typescript using hello()
console.log(heello("Gamma"));
// Need two argument 
function add(num1, num2) {
    return (num1 + num2);
}
console.log("Sum is: " + add(2000, 2000));
console.log("------------------------------------------------------");
// Display function displays information 
// Making a argument optional using ? in that case undefined will be assigned - NOTE If we only have one parameter 
// This will not work
// to that agrument
// Assigning default value using a equal symbol 
function dissplay(id, name, role) {
    console.log("Id:", id);
    console.log("Name:", name);
    // Check for undefined assignment, and display the role only when its is defined
    // if (role!=undefined){
    //     console.log("Role:", role);
    // }
}
// dissplay(1, "Gamma", "Admin")
dissplay(1, "Gamma");
// Since we are using an optional parameter ? we can provide two or three parameters 
// dissplay(1, "Gaurav") 
// Assigning default value using a equal symbol and then there is no need to check
// for undefined value. 
// Default value will only be used when you don't pass in any value 
console.log("------------------------------------------------------");
function display(id, name, role) {
    if (role === void 0) { role = "NormalUser"; }
    console.log("Id:", id);
    console.log("Name:", name);
    // Check for undefined assignment, and display the role only when its is defined
    // if (role!=undefined){
    console.log("Role:", role);
    // }
}
display(1, "Beta", "Accounts");
// Here we are not passing in the role value, so the default value will be choosen. 
// display(4, "Beta")
// Passing function as a parameter to another function
// If the function doesn't return the value we use a void return type
console.log("------------------------------------------------------");
function calculator(fun) {
    // we need to invoke the function where fun can be a function 
    console.log(fun(100, 70));
}
calculator(add);
console.log("------------------------------------------------------");
// Function returning another function, Here the return type will be any
function calculator_return() {
    function diff(num1, num2) {
        return num1 - num2;
    }
    return diff; // Here the return value is the inner function
}
var sub = calculator_return();
// We will have invoke the diff function to get the output
console.log(sub(910, 100));
// Shortcut 
// Here calculator_return()  returns diff
// diff(20,5) returns 15 which is displayed using console
console.log(calculator_return()(20, 5));
// Anonymous function  - A function that doesn't have a variable name is called anonymous function 
// function (<Parameter>):<Return Type>{<return statement>}
// We can use anonymous function by assigning it to a variable or as a call back func to an event handler 
// Assigning to a variable i.e. var "name of variable"
var hello = function (name) {
    return "Hello World, I am a typescript function! " + name;
};
console.log(hello('GammaBetaHai!!!'));
console.log(hello('HelloWorld!!'));
