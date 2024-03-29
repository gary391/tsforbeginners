// Interface in typescript contains all the rule (Properties and methods) 
// that an object, array, class must follow 
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
        console.log(this.name + "One of the best chinese phone at price " + this.price);
    },
    price: 900
};
