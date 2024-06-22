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

class Student{
    // Good practice to add an underscore when we make a field private.
    // this field can only be accessed using the accessor method.
    private _name:string;

    // Here we can call the private field/Property.
    display(){
        console.log(this._name);
    }

    whatIsYourName(){
        console.log(`What is your name ${this._name}?`)
    }

    // for Accessing the private properties outside the class use accessor method.
    // get key word
    get getName():string{
        // We can add logic related to formating which can be transparent to the end user.
        return this._name;
    }
    // You can set the property as well (set accessor)
    set setName(name:string){
        // We can have a logic related to setting which can be transparent to the end user.
        this._name=name;
    }

}

var student = new Student();
// The private field can only be accessed with in the class.
// Here the property can not be accessed outside the class.
// student._name="John";

student.setName = "Bill"; // Here set method will be invoked 
console.log(student.getName); // Here get method will be invoked 


class NewPerson {
    // private property name
    private _name:string;

    display() {
        console.log(this._name);
    }
    // Access method

    get getname():string {
        // Any formatting will go inside the getter method.
        return this._name

    //Setter method
    }
    set setname(name:string){

        // Any validation will go here in the setter method.
        this._name = name;

    }

}

var newperson = new NewPerson();
// newperson._name = "John"; // Here the _name property can't be accessed outside the clas. 
// As the property is private, you can set the value using setter.

newperson.setname = "Bob";

console.log(newperson.getname); // Here we are using accessor method to get the name.

