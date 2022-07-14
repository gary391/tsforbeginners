// What is different between i++ and ++i ?
/*
i++ value of variable i will be incremented after the line is executed.
++i value of the variable will be incremented before the line is executed.
 */

var n:number = 10;
var i = 1; 
while (i<=n){
    console.log(i++);
    // console.log(i);
    // i = i + 1;
    // i++;
}