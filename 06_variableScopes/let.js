// let variable - Has a block scope i.e. Only available with in the block of code and not outside. 
// var variable has a functional scope - i.e. its available within the entire function
// What is the key difference between let and var ?
// for (var i=0; i<10; i++){
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// Here variable 'i' is still available i.e. outside the 
// for loop, and will print 10, in order to limit this, we have 
// to use 'let' instead of var, and how TS will through error.
console.log(i);
