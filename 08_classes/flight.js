// Here we will implement a interface using a class.
// Here the class follows the rule for the interface using the key work implements
var Flight = /** @class */ (function () {
    // flighttime: "Daytime"
    // Constructor
    function Flight(flightNo, from, to, redeye) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
        this.redeye = redeye;
    }
    // Display method is implemented in the class and not in the interface. 
    Flight.prototype.display = function () {
        console.log(this.flightNo + " " + this.from + " " + this.to + " " + this.redeye);
    };
    return Flight;
}());
// Object of the class is created using a new key word.
var flight = new Flight(123, "Austin", "Denver", true);
flight.display();
