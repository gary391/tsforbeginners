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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Parent class 
var BMW = /** @class */ (function () {
    // Constructor function, note this refer to the object that will be created
    function BMW(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // common functionality 
    BMW.prototype.commonEngineFunc = function () {
        console.log("Common Func");
    };
    BMW.prototype.start = function () {
        console.log("Start");
    };
    BMW.prototype.stop = function () {
        console.log("Stop");
    };
    return BMW;
}());
// extend the class using extends key word 
var ThreeSeries = /** @class */ (function (_super) {
    __extends(ThreeSeries, _super);
    // constructor in the child class 
    // Use of super function as the first line of the constructor of the child class
    function ThreeSeries(make, model, year, cruiseControlEnabled, xmRadio) {
        var _this = 
        // super is used to call the constructor of the parent class.
        // Note: super must be the first line of the constructor of the child class
        // It should pass in all the properties of the parent class.
        _super.call(this, make, model, year) || this;
        _this.cruiseControlEnabled = cruiseControlEnabled;
        _this.xmRadio = xmRadio;
        return _this;
    }
    // Method in child class, called cruiseControl that will set the flag to enabled
    ThreeSeries.prototype.cruiseControlStart = function () {
        this.cruiseControlEnabled = true;
        console.log("Cruising");
    };
    ThreeSeries.prototype.cruiseControlStop = function () {
        this.cruiseControlEnabled = false;
        console.log("Disengage CruiseControl!!!");
    };
    ThreeSeries.prototype.xmRadioStart = function () {
        this.xmRadio = true;
        console.log("XM Radio Started");
    };
    ThreeSeries.prototype.xmRadioStop = function () {
        this.xmRadio = false;
        console.log("XM Radio Stopped");
    };
    // These method are also present in the parent class, but have been overridden in the child class.
    ThreeSeries.prototype.start = function () {
        console.log("Button Start");
    };
    ThreeSeries.prototype.stop = function () {
        console.log("Button Stop");
    };
    return ThreeSeries;
}(BMW));
var FiveSeries = /** @class */ (function (_super) {
    __extends(FiveSeries, _super);
    function FiveSeries(make, model, year, parkingAssistEnabled, laneAssistEabled, onstar) {
        var _this = _super.call(this, make, model, year) || this;
        _this.parkingAssistEnabled = parkingAssistEnabled;
        _this.laneAssistEabled = laneAssistEabled;
        _this.onStar = onstar;
        return _this;
    }
    FiveSeries.prototype.parkingAssistStart = function () {
        this.parkingAssistEnabled = true;
        console.log("Car will park it for your!");
    };
    FiveSeries.prototype.parkingAssistStop = function () {
        this.parkingAssistEnabled = false;
        console.log("Disengage Parking Assitance");
    };
    FiveSeries.prototype.laneAssistStart = function () {
        this.laneAssistEabled = true;
        console.log("Lane Assist Enabled");
    };
    FiveSeries.prototype.laneAssistStop = function () {
        this.laneAssistEabled = false;
        console.log("Disengage Lane Assist");
    };
    FiveSeries.prototype.onStarEmergencyAlwaysOn = function () {
        this.onStar = true;
        console.log("Emergency Always On");
    };
    // These method are also present in the parent class, but have been 
    // overridden in the child class. Note in order to override the method,
    // they need to exactly same as the parent class i.e. should have
    // same type & number of parameters etc.
    FiveSeries.prototype.start = function () {
        console.log("Remote Start");
    };
    FiveSeries.prototype.stop = function () {
        console.log("Remote Stop");
    };
    return FiveSeries;
}(BMW));
var threeSeries = new ThreeSeries("BMW", "328i", 2018, false, false);
// You can access the properties of the parent class using the object of the child class.
// As those properties are inhereted from the parent class.
console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
console.log("xmRadio: ".concat(threeSeries.xmRadio));
threeSeries.commonEngineFunc(); // functionality inhereted from the parent class 
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControlStart();
threeSeries.cruiseControlStop();
threeSeries.xmRadioStart();
threeSeries.xmRadioStop();
console.log("-----------------------");
console.log("-----------------------");
var fiveSeries = new FiveSeries("BMW", "535", 2018, false, false, false);
console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
console.log("laneAssitEnabled: ".concat(fiveSeries.laneAssistEabled));
console.log("onStar: ".concat(fiveSeries.onStar));
fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssistStart();
fiveSeries.parkingAssistStop();
fiveSeries.laneAssistStart();
// fiveSeries.laneAssistStop();
fiveSeries.onStarEmergencyAlwaysOn();
console.log("-----------------------");
console.log("-----------------------");
// This is a parent class 
var Audi = /** @class */ (function () {
    //Parent class constructor
    function Audi(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Methods
    Audi.prototype.commonEngineFunc = function () {
        console.log("Common Func");
    };
    Audi.prototype.start = function () {
        console.log("Start");
    };
    Audi.prototype.stop = function () {
        console.log("Stop");
    };
    return Audi;
}());
// extend this class using extends key word
var Q3Suv = /** @class */ (function (_super) {
    __extends(Q3Suv, _super);
    // constructor in the child class 
    function Q3Suv(make, model, year, cruiseControlEnabled) {
        var _this = 
        // When we do inheritence the first line in the constructor 
        // for a child class is super, which is a way of invoking the parent class 
        // constructor, so we need to pass in all the properties here as well.
        _super.call(this, make, model, year) || this;
        _this.cruiseControlEnabled = cruiseControlEnabled;
        return _this;
    }
    // Create a method that can control the properties.
    Q3Suv.prototype.cruiseControl = function () {
        this.cruiseControlEnabled = true;
        console.log("Crusing");
    };
    //Overriding Inheritance
    Q3Suv.prototype.start = function () {
        console.log("Button Start");
    };
    Q3Suv.prototype.stop = function () {
        console.log("Button Stop");
    };
    return Q3Suv;
}(Audi));
var Q5Suv = /** @class */ (function (_super) {
    __extends(Q5Suv, _super);
    function Q5Suv(make, model, year, parkingAssistEnabled) {
        var _this = 
        // When we do inheritence the first line in the constructor 
        // for a child class is super, which is a way of invoking the parent class 
        // constructor, so we need to pass in all the properties here as well.
        _super.call(this, make, model, year) || this;
        _this.parkingAssistEnabled = parkingAssistEnabled;
        return _this;
    }
    Q5Suv.prototype.passAssist = function () {
        this.parkingAssistEnabled = true;
        console.log("Parking");
    };
    Q5Suv.prototype.start = function () {
        console.log("Remote Start");
    };
    Q5Suv.prototype.stop = function () {
        console.log("Remote Stop");
    };
    return Q5Suv;
}(Audi));
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
console.log("-----------------------");
console.log("-----------------------");
var q5suv = new Q5Suv("Audi", "Q5S", 2025, true);
console.log(q5suv.parkingAssistEnabled); // If we don't initialize this, we will get undefined, using a constructor.
// Here we are access the properties of the parent class as well. 
console.log(q5suv.make);
console.log(q5suv.model);
console.log(q5suv.year);
q5suv.commonEngineFunc();
q5suv.start();
q5suv.stop();
q5suv.passAssist();
