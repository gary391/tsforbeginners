// classes are blue prints or template for creating objects
// using classes we can define rules and much more
// classes are not like interfaces, where in along with the set of rules 
// we will provide the implementation of the method
// We can define constructors, accessor method 
// classes are not just for complied time thing, like for interfaces
// classes exist at runtime time as well.


/*
Class definition
firstName
lastName
FrequentFlyerNO
 */

class Passenger {
    // Three property 
    firstName:string;
    lastName:string;
    frequentFlayerNo:number;

// Constructor - It's a method/function using which we can initialise the object properties, 
// at the time of creation of the object.

// Constructor in Typescript starts with a constructor key word. 
    constructor(fName:string, lName:string, fflyerNo:number){
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
    display(){
        console.log(this.firstName+" "+this.lastName+" "+this.frequentFlayerNo);
    }
}




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
for (let item in passenger2){
    // if(item!=="display"){
    //     console.log(item);
    //     console.log(passenger[item]);
    // }
    // instanceof operator which check if the object passenger[item] is a function where Function is the super class 
    // and all functions are am instance of this Function 
    if(passenger2[item] instanceof Function){
        continue; // Skip the body of this loop once the above condition is met. 
        // It will skip that current iteration and continue execution.
        // If we use break, once the above mention is met, the loop will break out. 
    }else{
        console.log(item);
        console.log(passenger2[item]);
    }
}