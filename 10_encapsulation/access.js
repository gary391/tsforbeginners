// Access modifiers using private
// private filed should start with an underscore to help other 
// devs to identify that the filed can be only accessed using 
// access modifiers. 
// Private filed can only be accessed with in the class 
var Student1 = /** @class */ (function () {
    function Student1() {
    }
    Student1.prototype.display = function () {
        console.log(this._name);
    };
    Object.defineProperty(Student1.prototype, "name", {
        // Accessor method 
        get: function () {
            return this._name;
        },
        //mutator method
        set: function (name) {
            this._name = name; // Here the name is the name that is passed in as a parameter. 
        },
        enumerable: false,
        configurable: true
    });
    return Student1;
}());
var student1 = new Student1();
student1.name = "Bob"; // This how you setting the private field.
console.log(student1.name); // This is how you access the private field. 
