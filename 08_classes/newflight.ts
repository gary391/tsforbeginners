// Implementing an interface 
// create an interface
// implement the interface using a class

interface INewflight{
    flightNo:number;
    from:string;
    to:string;
    display(): void; // Here the display method should be implemented in all the class 
} 

// create a class that will subscribe to this interface 

class NewFlight implements INewflight {
    // The class expects all the properties defined in the the interface
    flightNo:number;
    from:string;
    to:string;
    // flightTime:string; // extra property

    constructor(flightNo:number,from:string,to:string){
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    display(){
        console.log(this.flightNo+" "+this.from+" "+this.to);
        
    }

}

// To create a new object of a class you will use the new operator

var myflight = new NewFlight(123, "Moscow", "Rome");
myflight.display();