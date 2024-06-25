// import { add as sum, sub as diff } from "./calc";
// console.log(sum(2,3));
// console.log(diff(10,3));

// import * as calc from "./calc";
// console.log(calc.add(2,3));
// console.log(calc.sub(10,3));

// import {Calculator} from "./calc";
// var calculator = new Calculator();
// console.log(add())

// import {newadd, newsub} from './calc';
// console.log(newadd(2,3));
// console.log(newadd(10,2));

// Alias using as to use a different name for the imported function 

// import { newadd as sum, newsub as substract, mul } from './calc';
// console.log(sum(2,3));
// console.log(substract(10,2))

// Another approach while importing function is using a * 
// import * as calc from './calc';
// console.log(calc.mul(10,2));
// console.log(calc.newadd(10,2));
// console.log(calc.newsub(10,2));


// Default way to export and import a function between modules
// import mul from './calc';
// console.log(mul(2,3));

// Import the class all togather

// import { Calculator } from "./calc";

// var calculator = new Calculator;
// console.log(calculator.add(1,2));
// console.log(calculator.sub(5,1));

// Alias for Class imports 
//  import { Calculator as Calc } from "./calc";
 import Calculator from "./calc";

//  var calculator = new Calc();
 var calculator = new Calculator();
 console.log(calculator.add);
 console.log(calculator.sub);