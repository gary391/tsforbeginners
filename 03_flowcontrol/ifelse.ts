// Write a program to find the greatest number between a set of numbers 

/**
 * If-Else 
 * The If block is executed if the condition is true, and the else block is executed only when the
 * If block is not excuted. 
 * 
 * if(condition){ // Condition is true then the section the block of code in the bracket is executed
 * }
 * else{
 * }
 
 */
// Program to find the greatest number between three numbers 
var x:number = 30;
var y:number = 30;
var z:number = 30;

if (x>y && x>z){
    console.log("X is greater");
}else if (y>x && y>z){
    console.log("Y is greater");
}else if (z>x && z>y){
    console.log("Z is greater");
}else{
    console.log("Numbers are equal")
}

var x1:number = 10;
var y1:number = 20;
if (x1>y1){
    console.log("X1 is greater");
}else{
    console.log("Y1 is greater");
}

var x2:number = 40;
var y2:number = 40;
if (x2>y2){
    console.log("x2 is greater");
}else if(y>x){
    console.log("y2 is greater");
}else{
    console.log("Both the numbers are equal");
}


var z1:number = 5;
var z2:number = 10;
var z3:number = 15;

if (z1 > z2 && z1 > z3) {
    console.log("z1 is greatest");
} else if (z2 > z1 && z2 > z3) {
    console.log("z2 is greatest")
} else {
    console.log("z3 is greatest")
}

