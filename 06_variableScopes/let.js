/*
let variable - Has a block scope i.e. Only available with in the block of
code and not outside.

var variable - Has a functional scope - i.e. its available within the entire
function
*/
// What is the key difference between let and var ?
// Using var
function count_var() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
        // return i;
    }
    // Here the value of i is 10 i.e. the condition to exit
    // loop thus we get 10.
    // console.log(i);
    return "Counting is complete!";
    // return i;
}
// Note if we don't return we will see an undefined being returned.
console.log("count_var: ".concat(count_var()));
console.log("-------------------------------");
// Using let 
function count_let() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
        // return i;
    }
    // Can't access i outside the for loop
    // console.log(i);
    // Can't access i outside the for loop
    // return i;
    // return "Counting is complete!"
}
// Note if we don't return we will see an undefined being returned.
console.log("count_let: ".concat(count_let()));
// Here variable 'i' is still available i.e. outside the 
// for loop, and will print 10, in order to limit this, we have 
// to use 'let' instead of var, and how TS will through error. 
function logMessage() {
    console.log("This is a message");
    // This will cause a compilation error as the return type here is void
    // and we are trying to return a value.
    // return ("This is a message");
}
var logs = logMessage();
console.log(logs);
/*
for (var j=0;j<10; j++){
    console.log(j);
}
// Here the variable is accesible outside the block which is not possible in Java etc.
// where as it is possible here in typescript.
console.log(j);
*/
/*
// In order to restrict the scope of the variable we can use let.
// let is block scoped.
for (let j=0; j<0;j++){
    console.log(j);
}
console.log(j); // This will error out during compilation as j has blocked scope using let
*/ 
