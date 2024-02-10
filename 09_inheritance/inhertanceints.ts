/*
Inheritance is the process defining a new object using an existing object

Using extends key word we inherit 

- Accessing existing objects functionality
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
individual car and bus (companie/make) can inherit from the car and bus classes respectively 

BMW IS-A CAR
CAR IS-A VEHICLE
BUS IS-A VEHICLE
Can't say AUDI IS-A BUS ?

Note: "IS-A" a term we use to refer to inheritance
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