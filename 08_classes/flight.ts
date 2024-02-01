
interface IFlight{
    // Properties
    flightNo:number;
    from:string;
    to:string;
    display():void; //function property - method that all class should implement. 
}
// Here the class follows the rule for the interface using the key work implements
class Flight implements IFlight{ 
    flightNo:number;
    from:string;
    to:string;
    // flighttime: "Daytime"

    // Constructor
    constructor(flightNo:number, from:string, to:string ){
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }

    // Display method is implemented in the class and not in the interface. 
    display(): void {
        console.log(this.flightNo+" "+this.from+" "+this.to);
    }
}
// Object of the class
var flight = new Flight(123, "Austin","Denver");
flight.display();