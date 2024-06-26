// Arrow function or lambda function are shortcuts to define anonymous functions

/*
<var> 'name of variable' '=' (<paramater>:<type>):<type> '=>' 'value'; 

which is the body of the function' which is an implicit return or 
for explicit return use {<return> value;} 

Example:

var doubleMe = (num:number):number=>num*2; or => {return num*2;}
 */


// Using arrow function print hello!
// The arrow function is assigned to a variable hello, that variable can be used in a
// similar fashion to envoke a regular function. 


var greeting = ():string => {
    return "Greetings!!!";
}
console.log(greeting());

var hellomyworld = ():string =>{
    return "Helloworld!!";
}

console.log(hellomyworld());


var helllo = ():string => {
    return "Hello!";
};
console.log(helllo())

// How pass parameter to an arrow function 
// Here the country is the parameter
var greetingworld = (country: string):string =>{
    return "Greetings from "+ country;
}
console.log(greetingworld('Pakistan'))

var helloworld = (name: string):string =>{
    return "Hello! world, I am "+ name;
};
console.log(helloworld('Gamma'))

// Write a arrow function that will calculate the product of two numbers


var products = (num1: number, num2: number):number=>{
    return num1*num2; 
}

console.log("Product is:", products(10,22))

var sum =(num1: number, num2: number):number => {
    return num1+num2
}

console.log("Sum is: ", sum(10, 20))
// How to push ten Arrow function on to an arrays
// Invoke all those 10 arrow function using a loop again

// create a variable array type is any as it is carrying function 
// create a array, and add values in it. 
var myarray:Array<any> = [];

for(var i = 0; i<10; i++){
    //<array>.push(Arrow function) which returns index of an array
    myarray.push(():number=>{return i * 2});
}

console.log(myarray[0]()); // Print the array.
// This how you invoke the function stored in the array.
// Each element of the array is a arrow function
for(var i = 0; i<10; i++){
    // console.log(myarray[i]); // Print the function declaration 
    console.log(myarray[i]()); // This will invoke the function and print the value
}