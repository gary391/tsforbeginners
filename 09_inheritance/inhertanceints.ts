/*
Inheritance is the process defining a new object using an existing object

Using extends key word

- Accessing existing objects functionality
- Updating existing objects functionality
- Reusability and IS-A relation 
                    
                           VEHICLE 
                        /           \
                  IS-A /             \
                      /               \
                    CAR               BUS
             IS-A /     \            /    \
                 /       \          /      \
               BMW      AUDI      VOLVO   BENZ  


Here we can inherit properties for Vehicle class to car and bus classes, and similarly 
individual car and bus (companie/make) can inherit from the car and bus classes respectively 

BMW IS-A CAR
CAR IS-A VEHICLE
               */


class BMW {
    make:string;
    model:string;
    year:number;

    // Constructor function, note this refer to the object that will be created
    constructor(make:string,model:string,year:number){
        this.make = make;
        this.model=model;
        this.year=year;
    }
    // common functionality 
    commonEngineFunc(){
        console.log("Common Func");
    
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
}

// extend the class using extends key word 
class ThreeSeries extends BMW{
    cruiseControlEnabled:boolean;

    // constructor in the child class 
    // Use of super function as the first line of the constructor of the child class

    constructor(make:string,model:string,year:number,cruiseControlEnabled:boolean){
        super(make,model,year);
        this.cruiseControlEnabled = cruiseControlEnabled;
    }
    
    // Method in child class, called cruiseControl that will set the flag to enabled
    cruiseControl(){
        this.cruiseControlEnabled = true;
        console.log("Cruising");
        
    }
    // These method are also present in the parent class, but have been overridden in the child class.
    start(){
        console.log("Button Start");
    }
    stop(){
        console.log("Button Stop");
    }
}

class FiveSeries extends BMW{
    parkingAssistEnabled:boolean;

    constructor(make:string,model:string,year:number,parkingAssistEnabled:boolean){
        super(make,model,year);
        this.parkingAssistEnabled = parkingAssistEnabled;
    }

    parkingAssist(){
        this.parkingAssistEnabled = true;
        console.log("Car will park it for your!");
    }
    // These method are also present in the parent class, but have been overridden in the child class.
    // Note in order to override the method, they need to exactly same as the parent class i.e. should have
    // same number of parameters etc.
    start(){
        console.log("Remote Start");
    }
    stop(){
        console.log("Remote Stop");
    }

}

var threeSeries = new ThreeSeries("BMW","328i",2018,false);
console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
threeSeries.commonEngineFunc();
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControl();



var fiveSeries = new FiveSeries("BMW","535",2018,false);
console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssist();