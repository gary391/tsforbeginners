// Functions that follow the rules defined in an interfaces. 

// Here If you define a return type as void or you don't specify the return type, 
// You can update/change it when defining a function. 

interface Add{
    (x:number, y:number):void  // signature of the function, with no return type
} 


interface Sub{
    (x:number, y:number):void  // signature of the function, with a return type of number 
} 

// variable initialization of those particular interfaces

var add:Add; 
var sub:Sub;

add=function (x:number, y:number): void {
console.log(x+y);
};

// Here we can't add additional parameter as well i.e. z: 
sub=function (x:number, y:number): number {
    return x-y;
};