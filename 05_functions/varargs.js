// Write function that will create a product of any number or arguments
// Using rest params i.e. <...nums> where nums internally is an array data structure 
// For accessing the elements of the nums you can use a for loop. 
// Here we are using annonymous function
var product = function () {
    // var product = function (x:number,y:number,...nums:number[]) {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        result = result * nums[i];
    }
    return result;
};
console.log(product(2, 3, 4, 5));
console.log("-----------------------------------------");
// If you have argument other then rest argument you will need to define these before numbers
// Note the rest param is the last parameter in the parameter list. 
// To restrict the type of numbers you will have to use an array type
// Here we are using a number type but we can use string as well. 
var prod = function (x, y) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    var res = 1;
    for (var i = 0; i < numbers.length; i++) {
        // console.log(nums[i]);
        res = res * numbers[i];
    }
    return res;
};
console.log(product(2, 3, 4, 5));
