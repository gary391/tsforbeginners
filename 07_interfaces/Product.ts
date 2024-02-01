// interface in typescript contains all the rule (Properties and methods) that an object,
// array, class must follow 

// interface acts like a contract that your objects can follow 
// The concept of interface last till the code is compiled. 


// You can defined interface for functions, arrays and classes 


/* 
interface Student {
    firstName: string; // All the property that object subscribe or complies with this interface should have. 
    lastName: string;
    score:number;
    display():void; // function or methods as well 
    } 
*/

// Interface name product that has some property. 
// Note when defining the interface we will have to use semi colen
interface Product {
    id:number;
    name:string;
    description:string;
    price?:number; // Options properties using ?, if you take out price from the object parameter, it will not give error. 
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
    display():void{
        //body of function
        console.log(this.id+" "+this.name);
    },
    price:1100
}
// Here the object product3 is a subscriber of the interface.  
var product3:Product = {
    id:2233,
    name:"Samsung",
    description:"Smart Phone",
    display():void {
        console.log(this.name + " Folding display!!")
    }
}

// Here the object Product4 is a subscriber of the interface
var product4:Product = {
    id: 334433,
    name: "PlusOne",
    description:"Chinese smart phone",
    display():void{
        console.log(this.name + "One of the best chinese phone at price "+this.price)
    },
    price:900
}