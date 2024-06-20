// Implementing an interface 
// create an interface
// implement the interface using a class
// create a class that will subscribe to this interface 
var NewFlight = /** @class */ (function () {
    // flightTime:string; // extra property
    function NewFlight(flightNo, from, to) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    NewFlight.prototype.display = function () {
        console.log(this.flightNo + " " + this.from + " " + this.to);
    };
    return NewFlight;
}());
// To create a new object of a class you will use the new operator
var myflight = new NewFlight(123, "Moscow", "Rome");
myflight.display();
