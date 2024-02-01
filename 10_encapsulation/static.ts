// static properties i.e. common across various fields 

/*
check
bankName - This is comman between various customers 
customerName
accNo
routinNo
 */
// Using static all objects of the class share the properties across

class Check{
    static bankName:string ="Bank of America"; // class level property using static keyword
    customerName:string;
    accNo:number;
    routingNo:number;

    // In case you want to access the static property using objects of the class 
    // You can do that by creating methods

    display(){
        Check.bankName = "BOA-India";
        console.log(Check.bankName);
    
    }
    // getter and setter can be used to manipulate the static method
}

var check = new Check();
// Accessing the property using the class name directly as the property is defined as static
Check.bankName = "BOA"; 
check.display();

var check2 = new Check();
// As we have not defined constructor we can use the default constructor. 

check.accNo;

console.log(Check.bankName);