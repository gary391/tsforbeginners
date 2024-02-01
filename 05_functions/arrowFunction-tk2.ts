// Arrow function 

// Welcome function using arrow function 
var hello = (name: string ):string => {
    return "Hello "+name; 
}
console.log(hello("Gamma Mera name$$"));

var helloworldmera = (name: string):string =>{
    return "Helloworldmeranamehai "+name;
}
console.log(helloworldmera("Beta"));
// Function to add two numbers 

var add =  (num1:number, num2:number):number =>{
    return num1+num2;
}
console.log(add(12,4));

// Function to multiple two numbers 

console.log("-----------------------------------");
var mult = (num1:number, num2:number):number =>{
    return(num1 *num2);
}
console.log(mult(2,5));
// Create a array with ten arrow function 
console.log("-----------------------------------");

// Create an empty array 
var myArray:Array<any> = [];
var meraArray:Array<any> = [];
// For loop with each element of the array is a arrow function

for (var i=0; i<10;i++){
    // console.log(i);
    // pushing an anonymous funtion
    myArray.push(():number=>{
        return i;
    });
}

// for viewing the array we can use a for loop
for(var i = 0; i<10; i++){
    // console.log(myArray[i]);// this will just provide the reference to the function 
    console.log(myArray[i]()); // this will invoke the function. 
}
console.log("Product is ", mult (5,8))
console.log("-----------------------------------");