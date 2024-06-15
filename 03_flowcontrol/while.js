// What is different between i++ and ++i ?
/*
i++ value of variable i will be incremented after the line is executed.
++i value of the variable will be incremented before the line is executed.
 */
// var n:number = 10;
// Initialize the value of i with a 1;
// var i = 1; 
// var i = 0; 
// while (i<=n){ // Continue till the condition i.e. i <= n is not full filled. 
//     console.log(i++);
// console.log(i);
// i = i + 1;
// i++; increase the value of i by one.
// }
var n1 = 10;
var i = 1;
console.log("===================");
// calculate the vaue of n1 till the condition is fullfilled
// The while loop will continue till n1 is less then equal to 1
while (i <= n1) {
    console.log("value of n is: ".concat(n1));
    n1 = n1 - 1;
}
var n2 = 20;
var j = 10;
console.log("===================");
while (j <= n2) {
    console.log("value of n2 is: ".concat(n2));
    n2 = n2 - 1;
}
console.log("===================");
var z = 100;
var i = 90;
while (i <= z) {
    console.log("value of z is: ".concat(i++));
}
