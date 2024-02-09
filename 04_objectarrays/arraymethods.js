var levels = [10, 20, 30, 40, 50, 90, 100];
var marks = [60, 70, 80, 90, 99];
var ranks = [1, 2, 3, 4, 5, 6];
// Converts a array to a string as is i.e. with commas
console.log("***** TO STRING METHOD ******");
console.log(levels.toString());
console.log(marks.toString());
console.log(ranks.toString());
console.log("***** TO JOIN METHOD ******");
// Converts a array to a string with the separater provided. 
console.log(levels.join("-"));
console.log(marks.join("-"));
console.log(ranks.join("-"));
// cuts an array starting for element at index 3 upto but not including element at index 5
// This will create a new arrary and not impact the original array
console.log("***** TO SLICE METHOD ******");
console.log(levels.slice(3, 5));
console.log(marks.slice(3, 5));
console.log(ranks.slice(1, 3));
// Slice the array starting at index 3 upto the end 
console.log("***** TO SLICE METHOD START WITH ******");
console.log(levels.slice(3));
console.log(marks.slice(3));
console.log(levels.toString());
console.log(marks.toString());
// Splice function 
// Can delete and add elements to an array 
// starts at index 2, and deletes next three elements and then adds 77,88,99 
levels.splice(2, 3, 777, 888, 999);
marks.splice(2, 3, 56, 65);
console.log(levels.toString());
console.log(marks.toString());
// push and pop method - Similar to a stack model.
levels.push(111, 222, 4333);
marks.push(88, 77, 66);
console.log("Before the pop method: " + levels.toString());
console.log("Before the pop method: " + marks.toString());
// pop removes the last element of the array, and if the array is empty it will return undefined. 
// levels.pop()
console.log(levels.pop());
console.log(marks.pop());
console.log("After the pop: " + levels.toString());
console.log("After the pop: " + marks.toString());
