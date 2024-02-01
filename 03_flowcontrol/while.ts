// What is different between i++ and ++i ?
/*
i++ value of variable i will be incremented after the line is executed.
++i value of the variable will be incremented before the line is executed.
 */

var n:Number = 10;
// Initialize the value of i with a 1;
// var i = 1; 
var i = 0; 
while (i<=n){
    console.log(i++);
    // console.log(i);
    // i = i + 1;
    // i++;
}