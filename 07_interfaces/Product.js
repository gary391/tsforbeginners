// Interface in typescript contains all the rule (Properties and methods) 
// that an object, array, class must follow 
// Not used for inheretance
// Only used at compile time
// lets create a object that will comply with this interface. 
// var <name>:<InterfaceName> = {}
// Here we can use a json syntax, and can use commas instead of semi colens
// Same number of properties should be there in the interface as in the object. 
// The property name and type should be same as we have used in the parameter. 
var product1 = {
    id: 123,
    name: "Iphone",
    description: "Its Awesome!",
    type: "commerical",
    display: function () {
        //body of function
        console.log(this.id + " " + this.name);
    },
    // price:1000
};
// Here the object product2 is a subscriber of the interface.
var product2 = {
    id: 321,
    name: "IphoneX",
    description: "It's the most Awesome! phone ever",
    type: "commercial",
    display: function () {
        //body of function
        // Here this refer to product2 and accesses its id and name properties.
        console.log(this.id + " " + this.name);
    },
    price: 1100
};
// Here the object product3 is a subscriber of the interface.
var product3 = {
    id: 2233,
    name: "Samsung",
    description: "Smart Phone",
    type: "consumer",
    display: function () {
        // Here this refer to product3 and accesses its name property.
        console.log(this.name + " Folding display!!");
    }
};
// Here the object Product4 is a subscriber of the interface
var product4 = {
    id: 334433,
    name: "PlusOne",
    description: "Chinese smart phone",
    type: "consumer",
    display: function () {
        // Here this refer to product4 and accesses its name and price properties.
        console.log(this.name + "One of the best chinese phone at price " + this.price);
    },
    price: 900
};
// Define a object that complies with the interface.
// Here the object product4 is complying with the Product interface.
var product4 = {
    id: 90909,
    name: "Moto",
    description: "Motorola Phone",
    type: "Phone",
    display: function () {
        console.log(this.name + "'s last" + this.phone + " was extermely successful!!");
    },
    price: 800
};
product4.display();
// What is the reason for using this?
/*
The use of `this` makes the method more flexible and reusable because it can
access the properties of whichever instance it is called on, without needing to
know the specific instance ahead of time. This means you could have multiple
objects conforming to the `Product` interface, and each could use the `display`
method to print its own properties.
*/ 
