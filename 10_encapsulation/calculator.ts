/*

Here using `static` we don't need to create an object of a class to use the methods.

Utility method which do not directly affect the object state,
are good condidates for static methods.



Example: In case of a calculator where we have sum, sub, mul, div methods 
that do not need access to object properties, we simply pass in the parameter 
and they calculate the result and return it back to us. In these cases, we need
not create the instance of the Calculator or set any properties on it, we simply 
can use Calculator.sum and pass in the parameter.
*/

class Calculator {
    static sum(num1:number, num2:number):number{
        return num1+num2;
    }
    static sub(num1:number, num2:number):number{
        return num1-num2;
    }
    static mul(num1:number, num2:number):number{
        return num1*num2;
    }
    static div(num1:number, num2:number):number{
        return num1/num2;
    }
    static mod(num1:number, num2:number):number{
        return num1%num2;
    }
}

// Using static - Convert the function in the class to class level function 
// which can be accessed using the class name and doesn't require creation 
// of an object using a new key word.

console.log(Calculator.sum(20,20));
console.log(Calculator.sub(40,20));
console.log(Calculator.mul(40,20));
console.log(Calculator.div(40,20));
console.log(Calculator.mod(40,20));

