// Using public and read-only 
var Student = /** @class */ (function () {
    function Student() {
        // Property
        // public name:string // using the public key word, these can be accessed anywhere in the code.
        // If you want your property to not change anywhere in the code except when it is initialized
        // then you can use readonly. Here name is initialized with a value - John
        this.name = "John";
    }
    return Student;
}());
var student = new Student();
// student.name = "John";
