// Functions that follow the rules defined in an interfaces. 

// Here If you define a return type as void or you don't specify the return type, 
// You can update/change it when defining a function. 

// Interface for function:
interface Add{
    (x:number, y:number):void  // signature of the function, with no return type
} 


interface Sub{
    (x:number, y:number):number  // signature of the function, with a return type of number 
} 

interface Mult{
    (x:number, y:number):number
}

interface Div{
    (x:number, y:number): number
}
// variable initialization of those particular interfaces

var add:Add; 
var sub:Sub;
var mult:Mult;
var div:Div;

// Now we can assign these variables to function expressions

// Here we can't change the name of the parameter as the name of the parameter is governed by the interface. 
// add=function (x:number, y:string): void { // This will throw an error

// Here we are providing the method implementation of the method signature as defined in the interface.
// The return type defined in the interface in not strictly enforced i.e. we can change the return type 
// at the time of implementation and override what was defined in the interface. This is ONLY VALID IN CASE 
// OF VOID RETURN TYPE. OR IF YOU DON'T HAVE ANY RETURN TYPE.

// add=function (x:number, y:number): void {
// console.log(x+y);
add=function (x:number, y:number): number { // Here since we are using void return type in the interface, we can override the return type in here.
return (x+y); 

// Here we can't add additional parameter as well i.e. z: 
// Name of the parameter is not important, just the type and number of parameter is important. 
// Using the function interface we can enforce that the functions are implemented correctly

sub=function (a:number, b:number): number {
    return a-b;
};

// variable can be assigned to the functional expression 

mult= function (x:number, y:number):number {
    return x*y;
    
};

// Here the functional expression of the division is being assigned to div 
div = function (x:number, y:number):number {
    return x//y
}