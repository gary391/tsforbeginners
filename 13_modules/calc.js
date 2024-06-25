"use strict";
// you can use the export key word infront of the function 
// To export specific functions
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
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
// class Calculator {
// add(x:number, y:number) {
//         return x+y;
//     }
// sub(x:number, y:number) {
//         return x-y;
//     }
// }
// Here we want to export two function add and sub, using export
// export function newadd(x:number, y:number):number{
//         return x+y;
//     }
// export function newsub(x:number, y:number):number {
//         return x-y;
//     }
// // For exporting out these function from this module, use the export key word.
// // export {newadd, newsub};
// // Exporting function individualy by added a export key word before the function 
// // This is a way make the export of a function as default, you can have only single 
// // function with the default syntax.
// export  default function mul(x:number, y:number):number {
//     return (x*y);
// }
// Class based imports
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // No need to adde the key words like export function 
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.sub = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
