/*
Utility method which do not directly affect the object state,
are good condidates for static methods.

Example: In case of a calculator where we have sum, sub, mul, div methods
that do not need access to object properties, we simply pass in the parameter
and they calculate the result and return it back to us. In these cases, we need
not create the instance of the Calculator or set any properties on it, we simply
can use Calculator.sum and pass in the parameter.
*/
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.sum = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.sub = function (num1, num2) {
        return num1 - num2;
    };
    Calculator.mul = function (num1, num2) {
        return num1 * num2;
    };
    Calculator.div = function (num1, num2) {
        return num1 / num2;
    };
    return Calculator;
}());
// Using static - Convert the function in the class to class level function 
// which can be accessed using the class name and doesn't require creation 
// of an object using a new key word.
console.log(Calculator.sum(20, 20));
console.log(Calculator.sub(40, 20));
console.log(Calculator.mul(40, 20));
console.log(Calculator.div(40, 20));
