interface Exterior{
    color:string;
    numOfDoor:Number;
}

interface Interior{
    seat:number;
    auto:boolean;
}

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