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
    // class level property using static keyword
    static bankName:string ="Bank of America"; 
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
// Here we didn't define a constructor so we will use the default constructor.

var check = new Check();
// Accessing the property using the class name directly as the property is defined as static
// Check.bankName = "BOA-America";
check.display();

var check2 = new Check();
// As we have not defined constructor we can use the default constructor. 

check.accNo;

// console.log(Check.bankName);

class NewCheck {
    static bankName:string = "BoA"; // If the bankName is static across all the account you can set it as static
    customerName:string;
    accNo:number;
    routingNo:number;

    // In case you want to access your static properties, you can do that using 
    // methods example display method below, which is available to the object of the class 

    // Also within the class you have access to the static properties.
    display(){
        Check.bankName = "BOA-Online";
        console.log(Check.bankName)
    }
    // Additionally you can access and set these values using getter and setter methods.

}

var newcheck = new NewCheck();
// Access the property using the new object that is created here
newcheck.accNo;
// newcheck.bankName; Once the property becomes static, it is a class level property and can't be accessed via object.
newcheck.customerName;
newcheck.routingNo;
console.log(NewCheck.bankName);
// Overridding it here.
NewCheck.bankName="Bank of America"
console.log(NewCheck.bankName);
newcheck.display();
