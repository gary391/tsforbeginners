// classes are blue prints  
// using classes we can define rules and much more
// classes are not like interfaces, where in along with the set of rules 
// we will provide the implementation of the method
// We can define constructors accessor method 
// classes are not just for complied time thing, like for interfaces 


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
        //Here this points to the current object that is being created

        this.firstName = fName;
        this.lastName = lName;
        this.frequentFlayerNo = fflyerNo;
    }

    // Define function within the class 

    display(){
        console.log(this.firstName+" "+this.lastName+" "+this.frequentFlayerNo);
    }
}




// We can create an object of the class using a new operator
var passenger = new Passenger("John", "Gamma", 123456);
// console.log(passenger.firstName+" "+passenger.lastName+" "+passenger.frequentFlayerNo); // If we don't initialize the values you will see undefined in the output. 
passenger.display(); // Invoking the function present in the class 

var passenger2 = new Passenger("Bob", "Gamma", 654321);
// console.log(passenger2.firstName+" "+passenger2.lastName+" "+passenger2.frequentFlayerNo);
passenger2.display(); // Invoking the function present in the class 

for (let item in passenger){
    // if(item!=="display"){
    if(passenger[item] instanceof Function){
        continue;
    }else{
        console.log(item);
        console.log(passenger[item]);
    }
}