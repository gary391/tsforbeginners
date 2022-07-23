// interface in typescript contains all the rule that an object, array, class must follow 
// interface acts like a contract that your objects can follow 
//  The concept of interface last till the code is compiled. 
// lets create a object that will comply with this interface. 
// var <name>:<InterfaceName> = {}
// Here we can use a json syntax, and can use commas instead of semil colens
// Same number of properties should be there in the interface as in the object. 
// The property name and type should be same as we have used in the parameter. 
var product1 = {
    id: 123,
    name: "Iphone",
    description: "Its Awesome!"
};
var product2 = {
    id: 321,
    name: "IphoneX",
    description: "It's the most Awesome! phone ever",
    price: 1100
};
