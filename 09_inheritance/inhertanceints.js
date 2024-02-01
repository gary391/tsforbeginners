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
Can't say AUDI IS-A BUS ?
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
    function ThreeSeries(make, model, year, cruiseControlEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.cruiseControlEnabled = cruiseControlEnabled;
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
    function FiveSeries(make, model, year, parkingAssistEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.parkingAssistEnabled = parkingAssistEnabled;
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
    // These method are also present in the parent class, but have been overridden in the child class.
    // Note in order to override the method, they need to exactly same as the parent class i.e. should have
    // same number of parameters etc.
    FiveSeries.prototype.start = function () {
        console.log("Remote Start");
    };
    FiveSeries.prototype.stop = function () {
        console.log("Remote Stop");
    };
    return FiveSeries;
}(BMW));
var threeSeries = new ThreeSeries("BMW", "328i", 2018, false);
console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
threeSeries.commonEngineFunc();
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControlStart();
threeSeries.cruiseControlStop();
var fiveSeries = new FiveSeries("BMW", "535", 2018, false);
console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssistStart();
fiveSeries.parkingAssistStop();
