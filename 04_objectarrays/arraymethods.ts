var levels:number[] = [10,20,30,40,50,90,100]
// Converts a array to a string as is i.e. with commas
console.log(levels.toString());
// Converts a array to a string
console.log(levels.join(" "));
// cuts an arrary starting for element at index 3 upto but not including element at index 5
// This will create a new arrary and not impact the original array 
console.log(levels.slice(3,5));

// Slice the array starting at index 3 upto the end 
console.log(levels.slice(3));

console.log(levels.toString());

// Splice function 
// Can delete and add elements to an array 
// starts at index 2, and deletes next three elements and then adds 77,88,99 
levels.splice(2,3,77,88,99)
console.log(levels.toString());


// push and pop method 
levels.push(111,222,333)
console.log(levels.toString());

// pop removes the last element of the array
// levels.pop()
console.log(levels.pop());
// console.log(levels.toString());


 
