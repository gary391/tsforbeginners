// classes are blue prints or template for creating objects
// using classes we can define rules and much more
// classes are not like interfaces, where in along with the set of rules 
// we will provide the implementation of the method
// We can define constructors, accessor method 
// classes are not just for complied time thing, like for interfaces
// classes exist at runtime time as well.
// Interface only exist during the compilation time.
/*
Class definition
firstName
lastName
FrequentFlyerNO
 */
var Passenger = /** @class */ (function () {
    // Constructor - It's a method/function using which we can initialise the object properties, 
    // at the time of creation of the object.
    // Constructor in Typescript starts with a constructor key word. 
    function Passenger(fName, lName, fflyerNo) {
        // The parameter in the constructor can be named differently that the class parameter.
        // Like we are doing here, where the class parameter name is firstName, lastName, frequentFlayerNo
        // Where as the parameter name is fName, lName, and fflyerNo.
        // Here `this` points to the current object that is being created ********
        this.firstName = fName;
        this.lastName = lName;
        this.frequentFlayerNo = fflyerNo;
    }
    // Define function within the class 
    // Display function which is used to display 
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlayerNo);
    };
    return Passenger;
}());
// We can create an object of the class using a new operator
var passenger = new Passenger("John", "Gamma", 123456);
var passenger1 = new Passenger("Mota", "Lala", 321);
// If we don't initialize the values you will see undefined in the output. 
// console.log(passenger.firstName+" "+passenger.lastName+" "+passenger.frequentFlayerNo); 
// console.log(passenger1.firstName+" "+passenger1.lastName+" "+passenger1.frequentFlayerNo); 
passenger1.display();
passenger.display(); // Invoking the function present in the class, in the function display, this refer to the 
// passenger object. 
var passenger2 = new Passenger("Bob", "Beta", 654321);
// console.log(passenger2.firstName+" "+passenger2.lastName+" "+passenger2.frequentFlayerNo);
passenger2.display(); // Invoking the function present in the class 
console.log("-----------------------------");
console.log("-----------------------------");
for (var item in passenger2) {
    // if(item!=="display"){
    //     console.log(item);
    //     console.log(passenger[item]);
    // }
    // instanceof operator which check if the object passenger[item] is a function where Function is the super class 
    // and all functions are am instance of this Function 
    if (passenger2[item] instanceof Function) {
        continue; // Skip the body of this loop once the above condition is met. 
        // It will skip that current iteration and continue execution.
        // If we use break, once the above mention is met, the loop will break out. 
    }
    else {
        console.log(item);
        console.log(passenger2[item]);
    }
}
// Class NewPassanger
/*
Properties:
firstName
lastName
frequentFlyerNo

Steps:
1. Create a class
2. Create a object
3. Initialize properties when the object is created using constructor.
*/
var NewPassanger = /** @class */ (function () {
    // Constructor is function that will allow us to initiallize the properties of the class
    // when the object is created
    // The parameter name here can be any name, i.e. can be firstName or fName, lastName or lName, frequentFlyerNo or freqFlyerNo
    function NewPassanger(firstName, lastName, frequentFlyerNo) {
        // To access these properties 
        // Here this will always refer to the current object that is being created.
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyereNo = frequentFlyerNo;
    }
    // Function in the class action that the object of the class can do
    // display function here will display all the properties of the NewPessanger.
    // function property
    NewPassanger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyereNo);
    };
    return NewPassanger;
}());
// How to create object of a class ?
// You can create object of a class using a new operator 
// Where class name is a method name.
var newpassanger = new NewPassanger("James", "Bond", 1234);
// Access the properties using a dot operator
// If you didn't initialize the properties, then you will get undefined undefined undefined
// console.log(newpassanger.firstName+ " "+newpassanger.lastName+ " "+ newpassanger.frequentFlyereNo)
// method available for the object created from the class NewPassanger
newpassanger.display();
var newpassanger2 = new NewPassanger("Bob", "Bailey", 4321);
// Access the properties using a dot operator
// If you didn't initialize the properties, then you will get undefined undefined undefined
// console.log(newpassanger2.firstName+ " "+newpassanger2.lastName+ " "+ newpassanger2.frequentFlyereNo)
newpassanger2.display();
for (var item in newpassanger) {
    // How to skip the function?
    // if (item != 'display'){
    if (newpassanger[item] instanceof Function) {
        // Here we identifying the instance is a function 
        // once that is done using continue we are skipping it.
        continue;
    }
    else {
        console.log(item);
        console.log(newpassanger[item]);
    }
}
