
interface IFlight{
    // Properties
    flightNo:number;
    from:string;
    to:string;
    redeye: boolean
    display():void; //function property - method that all class should implement. 
}
// Here we will implement a interface using a class.
// Here the class follows the rule for the interface using the key work implements

class Flight implements IFlight{ 
    flightNo:number;
    from:string;
    to:string;
    redeye: boolean;
    // flighttime: "Daytime"

    // Constructor
    constructor(flightNo:number, from:string, to:string, redeye: boolean ){
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
        this.redeye = redeye;

    }

    // Display method is implemented in the class and not in the interface. 
    display(): void {
        console.log(this.flightNo+" "+this.from+" "+this.to+" "+this.redeye);
    }
}
// Object of the class is created using a new key word.
var flight = new Flight(123, "Austin","Denver", true);
flight.display();