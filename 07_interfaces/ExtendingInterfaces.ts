// Define an interface 
interface Exterior{
    color:string;
    numOfDoor:Number;
    Type:string
}

interface Interior{
    seat:number;
    auto:boolean;
    interiorColor:string;
}

// Using extends key word extend the car using Exterior and Interior
interface Car extends Exterior,Interior{
    make:string;
    model:string;
    year:number;

}
// Here the object has to comply with properties from the all the interfaces
var myCar:Car = {
    make:"Honda",
    model:"civic",
    year: 2018,
    color: "Black",
    numOfDoor:4,
    seat:4,
    auto:true,
    Type:"Sedan",
    interiorColor:"Red"
}
console.log(myCar)
// Create an object of this interface type 

var deepsCar:Car = {
    make:"Ford",
    model:"Mustang",
    year:2024,
    color: "Black",
    numOfDoor:2,
    seat:2,
    auto:true,
    Type:"race",
    interiorColor:"Bage"
}
console.log(deepsCar)