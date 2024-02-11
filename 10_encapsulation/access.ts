// Access modifiers using private
// private filed should start with an underscore to help other 
// devs to identify that the filed can be only accessed using 
// access modifiers. 

// Private filed can only be accessed with in the class 

class Student1 {
    private _name:string;

    display(){
        console.log(this._name);
    }
    // Accessor method 
    // Formating can be added here
    get name():string{
        return this._name;

    }
    // mutator method
    // Add validation of syntax, this can be done here.
    set name(name:string){
        this._name = name; // Here the name is the name that is passed in as a parameter. 
    }
}

var student1 = new Student1();
 
student1.name = "Bob"; // This how you setting the private field.
console.log(student1.name); // This is how you access the private field. 

// Public 
class Student3{
    // public name:string; // Public access specifier

    // read only access specifier - This is a constant and can't be assigned to a 
    // new value.
    public readonly name:string = "Johnny!"; 


}
var student3 = new Student3();
//student3.name = "John!";