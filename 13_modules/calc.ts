// you can use the export key word infront of the function 
// To export specific functions


// // export function add(x:number, y:number) {
// function add(x:number, y:number) {
//     return x+y;
// }

// function sub(x:number, y:number) {
//     return x-y;
// }

// // Export the function that you want other modules to use

// export{add, sub}
// export{add}

// Import or export Class based module

class Calculator {
add(x:number, y:number) {
        return x+y;
    }
sub(x:number, y:number) {
        return x-y;
    }
}
