// object casting using interface.

interface Employee{
    id:number;
}

// Where e1 is instance of Employee type
let e1:Employee;

let e2 = {id: 123, name:"John"} // e2 also has a name

e1 =e2; // This is valid
e2 = e1; // This is not valid as e1 not have a name field. 

// We can only assign the data of second variable to the first variable if 
// the variable in the first variable is contained in the second variable.