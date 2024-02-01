// Define an interface 
interface Exterior{
    color:string;
    numOfDoor:Number;
}

interface Interior{
    seat:number;
    auto:boolean;
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
    auto:true
}

// Create an object of this interface type 

var deepsCar:Car = {
    make:"Ford",
    model:"Mustang",
    year:2022,
    color: "Black",
    numOfDoor:2,
    seat:2,
    auto:true
}
console.log(deepsCar)