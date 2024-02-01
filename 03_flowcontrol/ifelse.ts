// Write a program to find the greatest number between a set of numbers 

/**
 * If-Else 
 * The If block is executed if the condition is true, and the else block is executed only when the
 * If block is not excuted. 
 * 
 * if(condition){
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
    console.log("Z is greater")
}else{
    console.log("Numbers are equal")
}