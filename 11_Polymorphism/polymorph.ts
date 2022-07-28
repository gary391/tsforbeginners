// Polymorphism
// Poly -> Multi 
// Morphic -> Forms

/**
Example: If we have a Person class which is extended by Student, Employee, Trainer. 

We can hold on child class object using parent class variables 

p:Person = new Student()     work()
       p = new Employee()    work()
       p = new Trainer()     work()

 */

class Employee{
    public firstName:string;
    public lastName:string;
    public designation:string;

    public print(): void{
        console.log("Employee Details!")
    }
}

// Child class that extends the employee class 

class Manager extends Employee{
    constructor(firstName:string, lastName:string, designation:string){
        super();
        this.firstName =firstName;
        this.lastName=lastName;
        this.designation=designation;

    }
    public print(): void{
       super.print() 
       console.log(`${this.firstName} ${this.lastName} - ${this.designation}`)
    }
}

class Lead extends Employee{
    constructor(firstName:string, lastName:string, designation:string){
        super();
        this.firstName =firstName;
        this.lastName=lastName;
        this.designation=designation;

    }
    public print(): void{
       super.print() 
       console.log(`${this.firstName} ${this.lastName} - ${this.designation}`)
    }
}

class Developer extends Employee{
    constructor(firstName:string, lastName:string, designation:string){
        super();
        this.firstName =firstName;
        this.lastName=lastName;
        this.designation=designation;

    }
    public print(): void{
       super.print() 
       console.log(`${this.firstName} ${this.lastName} - ${this.designation}`)
    }
}

let employees:Employee[] = new Array(new Manager("John","Cena","Manger"), new Lead("Gaurav", "Yadav", "Lead"), new Developer("Mayank","Yadav","Developer"))
for (var employee of employees ){
    employee.print()
}