// Interface in typescript contains all the rule (Properties and methods) 
// that an object, array, class must follow 
// Not used for inheretance
// Only used at compile time

// Interface acts like a contract that your objects can follow 
// The concept of interface last till the code is compiled. 


// You can defined interface for functions, arrays and classes 

// Interfaces in typescript only exist during compile time only.
/* 
interface Student {
    // All the property that object subscribe or complies with this interface should have.
    firstName: string; 
    lastName: string;
    score:number;
    display():void; // function or methods as well 
    } 

interface Person {
    Name: string;
    Gender: string;
    Nationality: string;
    Age: number;
    display(): void;
    }
*/

// Interface name product that has some property. 
// Note when defining the interface we will have to use semi colen
interface Product {
    // Properties that can hold data
    id:number;
    name:string;
    description:string;
    price?:number; // Options properties using ?, if you take out price from the object parameter, it will not give error. 
    type:string;
    // Methods that can be performed on the object.
    // Here we are using void return type.
    // IF YOU DON'T HAVE ANY RETURN TYPE.
    // OF VOID RETURN TYPE. OR IF YOU DON'T HAVE ANY RETURN TYPE.
    display():void // define a function along with its return type.
}

// lets create a object that will comply with this interface. 
// var <name>:<InterfaceName> = {}

// Here we can use a json syntax, and can use commas instead of semi colens
// Same number of properties should be there in the interface as in the object. 
// The property name and type should be same as we have used in the parameter. 
var product1:Product = {
    id:123,
    name:"Iphone",
    description:"Its Awesome!",
    type:"commerical",
    display():void{
        //body of function
        console.log(this.id+" "+this.name);
    },
    // price:1000
}

// Here the object product2 is a subscriber of the interface.
var product2:Product = {
    id:321,
    name:"IphoneX",
    description:"It's the most Awesome! phone ever",
    type:"commercial",
    display():void{
        //body of function
        // Here this refer to product2 and accesses its id and name properties.
        console.log(this.id+" "+this.name);
    },
    price:1100
}
// Here the object product3 is a subscriber of the interface.
var product3:Product = {
    id:2233,
    name:"Samsung",
    description:"Smart Phone",
    type:"consumer",
    display():void {
        // Here this refer to product3 and accesses its name property.
        console.log(this.name + " Folding display!!")
    }
}

// Here the object Product4 is a subscriber of the interface
var product4:Product = {
    id: 334433,
    name: "PlusOne",
    description:"Chinese smart phone",
    type:"consumer",
    display():void{
        // Here this refer to product4 and accesses its name and price properties.
        console.log(this.name + "One of the best chinese phone at price "+this.price)
    },
    price:900
}
// Define a object that complies with the interface.
// Here the object product4 is complying with the Product interface.
var product4:Product = {
    id: 90909,
    name: "Moto",
    description: "Motorola Phone",
    type: "Phone",
    display(): void{
        console.log(this.name + "'s last" + this.phone + " was extermely successful!!")
    },
    price: 800

}

product4.display()

// What is the reason for using this?
/*
The use of `this` makes the method more flexible and reusable because it can 
access the properties of whichever instance it is called on, without needing to 
know the specific instance ahead of time. This means you could have multiple 
objects conforming to the `Product` interface, and each could use the `display` 
method to print its own properties.
*/