// let variable - Has a block scope
// var variable has a functional scope


// for (var i=0; i<10; i++){
for (let i=0; i<10; i++){
    console.log(i);
}

// Here variable 'i' is still available i.e. outside the 
// for loop, and will print 10, in order to limit this, we have 
// to use 'let' instead of var, and how TS will through error. 
console.log(i);
