/* 
let variable - Has a block scope i.e. Only available with in the block of 
code and not outside. 

var variable - Has a functional scope - i.e. its available within the entire 
function
*/ 

// What is the key difference between let and var ?
// Using var

function count_var():any {
    for (var i=0; i<10; i++){
            console.log(i);
            // return i;
        }
        // Here the value of i is 10 i.e. the condition to exit
        // loop thus we get 10.
        // console.log(i);
        return "Counting is complete!"
        // return i;
}
// Note if we don't return we will see an undefined being returned.
console.log(`count_var: ${count_var()}`)
console.log("-------------------------------")
// Using let 
function count_let():void {
    for (let i=0; i<10; i++){
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
console.log(`count_let: ${count_let()}`);



// Here variable 'i' is still available i.e. outside the 
// for loop, and will print 10, in order to limit this, we have 
// to use 'let' instead of var, and how TS will through error. 

function logMessage(): void {
    console.log("This is a message");
    // This will cause a compilation error as the return type here is void
    // and we are trying to return a value.
    // return ("This is a message");
}
const logs = logMessage();
console.log(logs);