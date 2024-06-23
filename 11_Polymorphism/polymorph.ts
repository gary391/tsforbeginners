// Polymorphism
// Poly -> Multi 
// Morphic -> Forms or shapes

/*
In the world of object oriented programming if we have a class person that 
is extended by Student, Employee and Trainer, we can hold on to the child 
class objects using the parent class variable. so the person variable p of Person
type can hold on to a Student Object, it can hold on to an Employee object and 
it can hold on to a Triner Object.
 */

/**
Example: If we have a Person class which is extended by Student, Employee, Trainer. 

We can hold on child class object using parent class variables 

p:Person = new Student()     work()
       p = new Employee()    work()
       p = new Trainer()     work()

 */

// Parent class 
class Employee{
    public firstName:string;
    public lastName:string;
    public designation:string;
    public employeeId:string;

    public print(): void{
        console.log(`EmployeeID: ${this.employeeId}`)
    }
}

// Child class that extends the employee class 

class Manager extends Employee{
    constructor(firstName:string, lastName:string, designation:string, employeeId:string){
        super();
        this.firstName =firstName;
        this.lastName=lastName;
        this.designation=designation;
        this.employeeId = employeeId;

    }
    // Override the print method of the parent class 
    public print(): void{
       super.print(); // Will invoke the super class print method
       console.log(`${this.firstName} ${this.lastName} - ${this.designation}`)
    }
}

class Lead extends Employee{
    constructor(firstName:string, lastName:string, designation:string, employeeId:string){
        super();
        this.firstName =firstName;
        this.lastName=lastName;
        this.designation=designation;
        this.employeeId=employeeId;

    }
    public print(): void{
       super.print()
       console.log(`${this.firstName} ${this.lastName} - ${this.designation}`)
    }
}

class Developer extends Employee{
    constructor(firstName:string, lastName:string, designation:string, employeeId:string){
        super();
        this.firstName =firstName;
        this.lastName=lastName;
        this.designation=designation;
        this.employeeId=employeeId;
    }
    public print(): void{
       super.print() 
       console.log(`${this.firstName} ${this.lastName} - ${this.designation}`)
    }
}

let employees:Employee[] = new Array(new Manager("John","Cena","Manger", "1234"), new Lead("Jitu", "Rao", "Lead", "3445"), new Developer("Minku","Rao","Developer", "2828"));
for (var employee of employees ){
    employee.print()
}
class NewEmployee{
    public firstName:string;
    public lastName:string;
    public designation:string;

    // Method of the class 
    public print():void {
        console.log("Employee Details");
    }
}

class NewLead extends NewEmployee{ 
    // This class extends from the parent class NewEmployee
    // It has its own print method

    // constructor 

    constructor(firstName:string,lastName:string,designation:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;

    }
    public print():void {
        // invokes the parent class print method
        super.print()
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`)
    }

}

class NewDeveloper extends NewEmployee{ 
    // This class extends from the parent class NewEmployee
    // It has its own print method

    // constructor 

    constructor(firstName:string,lastName:string,designation:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;

    }
    public print():void {
        // invokes the parent class print method
        super.print()
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`)
    }

}

class NewManager extends NewEmployee{ 
    // This class extends from the parent class NewEmployee
    // It has its own print method

    // constructor 

    constructor(firstName:string,lastName:string,designation:string){
        // The super will add "Employee details"
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;

    }
    public print():void {
        // invokes the parent class print method
        super.print()
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`)
    }

}

// Instance of a classes 
// Here we are creating an arrary of the parent class i.e. NewEmployee and adding details from the child classes.
// The parent type can point to any of the child type dynamically. This is what polymorphism is. 
let newemployees:NewEmployee[] = new Array(new NewManager("Jeremy", "Jackson", "Manager"), new NewLead("Pallavi", "Bhave","Lead"), new NewDeveloper("gary", "391", "Developer"))

for (var newemployee of newemployees ){
    newemployee.print();

}