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