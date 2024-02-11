// static properties i.e. common across various fields 
/*
check
bankName - This is comman between various customers
customerName
accNo
routinNo
 */
// Using static all objects of the class share the properties across
var Check = /** @class */ (function () {
    function Check() {
    }
    // In case you want to access the static property using objects of the class 
    // You can do that by creating methods
    Check.prototype.display = function () {
        Check.bankName = "BOA-India";
        console.log(Check.bankName);
    };
    // class level property using static keyword
    Check.bankName = "Bank of America";
    return Check;
}());
// Here we didn't define a constructor so we will use the default constructor.
var check = new Check();
// Accessing the property using the class name directly as the property is defined as static
// Check.bankName = "BOA-America";
check.display();
var check2 = new Check();
// As we have not defined constructor we can use the default constructor. 
check.accNo;
// console.log(Check.bankName);
