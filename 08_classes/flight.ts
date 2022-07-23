
interface IFlight{
    flightNo:number;
    from:string;
    to:string;
    display():void; //function property
}

class Flight implements IFlight{ // Here the class using following the rule for the interface using the key work implements
    flightNo:number;
    from:string;
    to:string;

    constructor(flightNo:number, from:string, to:string ){
        this.flightNo= flightNo;
        this.from = from;
        this.to = to;
    }

    display(): void {
        console.log(this.flightNo+" "+this.from+" "+this.to);
    }
}

var flight = new Flight(123, "Austin","Denver");
flight.display();