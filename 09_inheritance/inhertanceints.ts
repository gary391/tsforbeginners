/*
Inheritance is the process defining a new object using an existing object

Using extends key word we inherit 

- Accessing existing objects functionality example iphone 7 extends iphone6S + increase functionality
- Updating existing objects functionality
- Reusability and IS-A relation (re-use)
                    
                           VEHICLE 
                        /           \
                  IS-A /             \ IS-A
                      /               \
                    CAR               BUS
             IS-A /     \            /    \ IS-A
                 /       \          /      \
               BMW      AUDI      VOLVO   BENZ  


Here we can inherit properties for Vehicle class to car and bus classes, and similarly 
individual car and bus (company/make) can inherit from the car and bus classes respectively 

BMW IS-A CAR
CAR IS-A VEHICLE
BUS IS-A VEHICLE
Can't say AUDI IS-A BUS ?

Note: "IS-A" a term we use to refer to inheritance
*/

// Parent class 
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

    // The properties/methods in the parent class will automatically
    // come to the child class from where it is being extended. 

    cruiseControlEnabled:boolean;
    xmRadio:boolean;
    // constructor in the child class 
    // Use of super function as the first line of the constructor of the child class

    constructor(make:string,model:string,year:number,cruiseControlEnabled:boolean,xmRadio:boolean ){
        // super is used to call the constructor of the parent class.
        // Note: super must be the first line of the constructor of the child class
        // It should pass in all the properties of the parent class.
        super(make,model,year); 
        this.cruiseControlEnabled = cruiseControlEnabled;
        this.xmRadio = xmRadio;
    }
    
    // Method in child class, called cruiseControl that will set the flag to enabled
    cruiseControlStart(){
        this.cruiseControlEnabled = true;
        console.log("Cruising");
        
    }
    cruiseControlStop(){
        this.cruiseControlEnabled = false;
        console.log("Disengage CruiseControl!!!")
    }

    xmRadioStart(){
        this.xmRadio = true;
        console.log("XM Radio Started");
    }
    xmRadioStop(){
        this.xmRadio = false;
        console.log("XM Radio Stopped");
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
    laneAssistEabled:boolean;
    onStar:boolean;

    constructor(make:string,model:string,year:number,parkingAssistEnabled:boolean,laneAssistEabled:boolean, onstar:boolean){
        super(make,model,year);
        this.parkingAssistEnabled = parkingAssistEnabled;
        this.laneAssistEabled = laneAssistEabled;
        this.onStar = onstar;
    }

    parkingAssistStart(){
        this.parkingAssistEnabled = true;
        console.log("Car will park it for your!");
    }
    parkingAssistStop(){
        this.parkingAssistEnabled = false;
        console.log("Disengage Parking Assitance")
    }

    laneAssistStart(){
        this.laneAssistEabled = true;
        console.log("Lane Assist Enabled");
    }
    laneAssistStop(){
        this.laneAssistEabled = false;
        console.log("Disengage Lane Assist")
    }
    
    onStarEmergencyAlwaysOn(){
        this.onStar = true;
        console.log("Emergency Always On");
    }
    // These method are also present in the parent class, but have been 
    // overridden in the child class. Note in order to override the method,
    // they need to exactly same as the parent class i.e. should have
    // same type & number of parameters etc.

    start(){
        console.log("Remote Start");
    }
    stop(){
        console.log("Remote Stop");
    }

}

var threeSeries = new ThreeSeries("BMW","328i",2018,false,false);

// You can access the properties of the parent class using the object of the child class.
// As those properties are inhereted from the parent class.
console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
console.log(`xmRadio: ${threeSeries.xmRadio}`);
threeSeries.commonEngineFunc(); // functionality inhereted from the parent class 
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControlStart();
threeSeries.cruiseControlStop();
threeSeries.xmRadioStart();
threeSeries.xmRadioStop();

console.log("-----------------------")
console.log("-----------------------")

var fiveSeries = new FiveSeries("BMW","535",2018,false,false,false);
console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
console.log(`laneAssitEnabled: ${fiveSeries.laneAssistEabled}`);
console.log(`onStar: ${fiveSeries.onStar}`);
fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssistStart();
fiveSeries.parkingAssistStop();
fiveSeries.laneAssistStart();
// fiveSeries.laneAssistStop();
fiveSeries.onStarEmergencyAlwaysOn();

console.log("-----------------------")
console.log("-----------------------")

// This is a parent class 
class Audi {
    make:string;
    model:string;
    year:number;

    //Parent class constructor
    constructor(make:string, model:string, year:number){
        this.make = make;
        this.model = model;
        this.year = year;

    }

    // Methods
    commonEngineFunc(){
        console.log("Common Func")
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }

}

// extend this class using extends key word
class Q3Suv extends Audi {
    // Note there is no rule enforcement as in case of interface 
    // but we are extending it i.e. adding functionality.
    // The parent class properties will come to it automatically
    cruiseControlEnabled:Boolean;

    // Create a method that can control the properties.
    cruiseControl(){
        this.cruiseControlEnabled = true;
        console.log("Crusing");
    }

    // constructor in the child class 
    constructor(make:string, model:string, year:number, cruiseControlEnabled:boolean){
        // When we do inheritence the first line in the constructor 
        // for a child class is super, which is a way of invoking the parent class 
        // constructor, so we need to pass in all the properties here as well.
        super(make,model,year);
        this.cruiseControlEnabled = cruiseControlEnabled;

    }
    // Overriding Inheritance
    // For override the function, these should match what we have in the parent class. 
    // Example if the parent class function has a paramter, then we should have same parameters
    // in the child class.

    // In case of new parameters, these functions will be considered as new functions and 
    // not considered as overriding.
    start(){
        console.log("Button Start");
    }
    stop(){
        console.log("Button Stop");
    }
   
    }



class Q5Suv extends Audi {
    
    parkingAssistEnabled:boolean;

    passAssist(){
        this.parkingAssistEnabled = true;
        console.log("Parking")
    }



    constructor(make:string, model:string, year:number, parkingAssistEnabled:boolean){
        // When we do inheritence the first line in the constructor 
        // for a child class is super, which is a way of invoking the parent class 
        // constructor, so we need to pass in all the properties here as well.
        super(make,model,year);
        this.parkingAssistEnabled = parkingAssistEnabled;
    }
    start(){
        console.log("Remote Start");
    }
    stop(){
        console.log("Remote Stop");
    }

}

var q3suv = new Q3Suv("Audi", "Q3S", 2024, false);
console.log(q3suv.cruiseControlEnabled); // If we don't initialize this, we will get undefined, using a constructor.
// Here we are access the properties of the parent class as well. 
console.log(q3suv.make);
console.log(q3suv.model);
console.log(q3suv.year);
q3suv.commonEngineFunc();
q3suv.start();
q3suv.stop();
q3suv.cruiseControl();

console.log("-----------------------")
console.log("-----------------------")

var q5suv = new Q5Suv("Audi", "Q5S", 2025, true);
console.log(q5suv.parkingAssistEnabled); // If we don't initialize this, we will get undefined, using a constructor.
// Here we are access the properties of the parent class as well. 
console.log(q5suv.make);
console.log(q5suv.model);
console.log(q5suv.year);
q5suv.commonEngineFunc();
q5suv.start(); // Here we have overriding this method which is present in the parent class.
q5suv.stop();
q5suv.passAssist();
