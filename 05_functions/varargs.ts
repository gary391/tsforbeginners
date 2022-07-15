// Write function that will create a product of any number or arguments
// Using rest params i.e. <...nums> where nums internally is an array data structure 
// If you have argument other then rest argument you will need to define these before nums
// To restrict the type of nums you will have to use an array type
// Here we are using a number type but we can use string as well. 
var product = function (x:number,y:number,...nums:number[]) {

    var result = 1;
    for (var i=0; i<nums.length; i++){
        console.log(nums[i]);
        result = result * nums[i];
    
    }
    return result
}

console.log(product(2,3,4,5))