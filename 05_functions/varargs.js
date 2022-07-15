// Write function that will create a product of any number or arguments
// Using rest params i.e. <...nums> where nums internally is an array data structure 
var product = function () {
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
