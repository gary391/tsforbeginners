// What is encapsulation - It is a way to protect the properties and function from other objects 
// Imagine a capsule
// the content of the capsule are data/variables and functionailty/method
// capsule body is the class - method are required to access the variables/data. 


// Writing the data and code in one single unit 

class Student{
    private _name:string;


    display(){
        console.log(this._name);
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
//student._name="John"; Here the property can not be accessed outside the class. 
student.setName = "Bill"; // Here set method will be invoked 
console.log(student.getName); // Here get method will be invoked 

 