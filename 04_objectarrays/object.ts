// Object in TS are properties that have a key and value. 
// Properties can be functions as well. 
// object representation help us to map the real world problems to a 
// software solution, where we can represent everything as a object.


//object in TS is a property that has a key and value. 
// keys are unique and values can be anything.
// values can also be methods and functions as well.
// car object with properties


// Using Interfaces and class you can define the blue print of our object 
// and govern what can go into an object.

var car = {
    make: "mazda",
    model: "626",
    year: 1998,
};

// for loop in TS is similar to python 
for(var info in car){
    console.log(car[info])

}

// Object in typescript 
var student = {
    firstName: "John",
    lastName: "Dao",
    id: 45,
    score: 90
};
// child is an object 
var child = {
    fName: "Beta",
    lName: "Mera",
    age: 6,
    coursesa: "Maths" 
};
// Here employee is an object 
var employees = {
    fname: "John",
    lname: "Smith",
    employee_id: "123abc"
};

var product = {
    pid: 123,
    pname: "Iphone",
    description: "Expensive"
};
console.log("*******************");
console.log(product.pname);
console.log(product.pid);
console.log(product.description);
console.log("*******************");
// for accessing employee properties you can use dot notation
console.log(employees.employee_id);
console.log(employees.fname);
console.log(employees.lname);
console.log("*******************");
console.log(child.fName);
console.log(child.lName);
// How to access the object ?
// This is done using a dot notation
// console.log(student.name);
// console.log(student.id);
// console.log(student.score);

// How to access properties i.e. keys of the object ?
// How to access properties i.e. values of the object ?
// For in loop for accessing various propeties with in an object.
// For accessing the value we can use oject[key]

for (var item in product) {
    console.log(`item: ${item}`);
    console.log(`value: ${product[item]}`);

}

for (var employee in employees){
    console.log(`employee item: ${employee}`)
    console.log(`employee value: ${employees[employee]}`)
}

for (var item in student){
    console.log(item);
    // console.log(student[item]);
}
console.log("*******************");

// For in loop 
for (var id in child){
    console.log(id);
    console.log(child[id]);
}
console.log("*******************");
// Destructuring values to an object 
var {fName, lName, age, coursesa} = child;
console.log(fName, lName, age, coursesa);
console.log("*******************");
// destructuring of object
// Unpacking in TS where elements of property should match with the variable. 
// property name should match with what is there in the object

var{firstName, lastName} = student;
console.log(firstName+" "+lastName);

console.log("*******************");
var{fName, lName} =child;
console.log(fName+" "+lName);
console.log("*******************");

var{pname, description} = product;
console.log(pname+" is "+description)