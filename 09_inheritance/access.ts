// Using public and read-only 

class Student{
    // Property
    // public name:string // using the public key word, these can be accessed anywhere in the code.
    
    // If you want your property to not change anywhere in the code then you can use readonly 
    public readonly name:string = "John";
}

var student = new Student();
student.name = "John";
