class Calculator {
    static sum(num1:number, num2:number){
        return num1+num2;
    }
    static sub(num1:number, num2:number):number{
        return num1-num2;
    }
}

// Using static - Convert the function in the class to class level function 
// which can be accessed using the class name and doesn't require creation 
// of an object.

console.log(Calculator.sum(20,20));
console.log(Calculator.sub(40,20));

