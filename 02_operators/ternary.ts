// Ternary Operator

// testExpression?value1:value2
// test expression is calculated and output is boolean i.e. true or false 
// Based on the result either value1 or value 2 is calculated i.e. true or false.
// if the expression results true the value on the left will be returned.
// if the expression resutls false the value of the right will be returned.
// value1 and value2 can be literal value or expression. 



var x:number = 50;
var y:number= 20;
var output:string =(x>y)?"X is greater than Y":"Y is greater then X"
var result:string = (x<y)?"X is greater than Y":"Y is greater than X"; // True:False
console.log(output)
console.log(result)