// What is encapsulation - It is a way to protect the properties and function from other objects 
// Imagine a capsule
// the content of the capsule are data/variables and functionailty/method
// capsule body is the class - method are required to access the variables/data. 
// Writing the data and code in one single unit 
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.display = function () {
        console.log(this._name);
    };
    Object.defineProperty(Student.prototype, "getName", {
        // for Accessing the private properties outside the class use accessor method.
        // get key word
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setName", {
        // You can set the property as well (set accessor)
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student = new Student();
//student._name="John"; Here the property can not be accessed outside the class. 
student.setName = "Bill"; // Here set method will be invoked 
console.log(student.getName); // Here get method will be invoked 
