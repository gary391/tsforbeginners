// Write a program to find the greatest number between a set of numbers 

var x:number = 10;
var y:number = 10;
var z:number = 10;

if (x>y && x>z){
    console.log("X is greater");
}else if (y>x && y>z){
    console.log("Y is greater");
}else if (z>x && z>y){
    console.log("Z is greater")
}else{
    console.log("Numbers are equal")
}