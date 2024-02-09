// const: Once you define a variable with the const prefix
// it should not be changed. In JAVA its the `final` key word.

// If you want certain value to remain constant in your program you 
// should use constant 


// var pi = 3.14; // If you define variable with a var prefix, you can reassign a new value to the variable.
// If you define a variable with a const prefix, its value is constant. 


// If we transcomplie the below code, we will not get an error. 
// Note typescript doesn't strictly enforce the const as is it supported started ES6
/*
const pi = 3.14;
pi = 4.5; // This will throw an error.


const product = function (x:number, y:number):number {
    return x*y;
}
*/

// **** Good practice to define const against function declarations as well. *****


// var product = function (x:number, y:number):number {
const product = function (x:number, y:number):number { 
    return x*y;
}


// Here the same variable/function is being reassigned a different function 
// implementation
// now the product function will calculate the sum instead of multiplication 
// if it is defined using var 
// to avoid this issues we should use const.

product = function (x:number, y:number):number { 
    return x+y;
}



console.log(product);