// static properties i.e. common across various fields 

/*
check
bankName - This is comman between various customers 
customerName
accNo
routinNo
 */


class Check{
    static bankName:string ="Bank of America"; // class level property using static keyword
    customerName:string;
    accNo:number;
    routingNo:number;
}

var check = new Check();
Check.bankName = "BOA"; // Accessing the property using the class name directly

var check2 = new Check();
check.accNo;

console.log(Check.bankName);