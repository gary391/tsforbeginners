// Here the class follows the rule for the interface using the key work implements
var Flight = /** @class */ (function () {
    // flighttime: "Daytime"
    // Constructor
    function Flight(flightNo, from, to) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    // Display method is implemented in the class and not in the interface. 
    Flight.prototype.display = function () {
        console.log(this.flightNo + " " + this.from + " " + this.to);
    };
    return Flight;
}());
// Object of the class
var flight = new Flight(123, "Austin", "Denver");
flight.display();
