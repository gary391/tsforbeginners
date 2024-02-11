/*
What is encapsulation?

It is a way to protect the properties and function of a function from other objects.

**** Imagine a capsule ****

In most of the object oriented programming languages this capsule is called a
class.

The content of the capsule are data/variables and functionailty/method
capsule body is the class - **** Method are required to access
the variables/data. ****

If other objects want to access the data they will have to go through
the methods/functions.

"Writing the data and code in one single unit" - Encapsulation

*/
// Writing the data and code in one single unit 
var Student = /** @class */ (function () {
    function Student() {
    }
    // Here we can call the private field/Property.
    Student.prototype.display = function () {
        console.log(this._name);
    };
    Student.prototype.whatIsYourName = function () {
        console.log("What is your name ".concat(this._name, "?"));
    };
    Object.defineProperty(Student.prototype, "getName", {
        // for Accessing the private properties outside the class use accessor method.
        // get key word
        get: function () {
            // We can add logic related to formating which can be transparent to the end user.
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setName", {
        // You can set the property as well (set accessor)
        set: function (name) {
            // We can have a logic related to setting which can be transparent to the end user.
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student = new Student();
// The private field can only be accessed with in the class.
// Here the property can not be accessed outside the class.
// student._name="John";
student.setName = "Bill"; // Here set method will be invoked 
console.log(student.getName); // Here get method will be invoked 
