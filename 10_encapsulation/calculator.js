var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.sum = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.sub = function (num1, num2) {
        return num1 - num2;
    };
    return Calculator;
}());
console.log(Calculator.sum(20, 20));
console.log(Calculator.sub(40, 20));
