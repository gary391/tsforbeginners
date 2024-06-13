// Number assignment to a variable
// var is the key word to define a variable in typescript.
// General syntax is var <name of the variable>:<Type of the variable> = <value of the variable>;
// Avoid using key words for variable name.
// For verifiying the values you can add the transcomplied js file in the html file 
// and open it in a chrome browser, then hit option+command+i and click on the console tab.
var n1 = 1000;
console.log(n1);
var n2 = 3000;
console.log(n2);
// String assignment to a variable 
var s1 = "You are the creator of your destiny";
var s2 = "All the power is with in you, you can do anything and everything";
var s3 = "Hello world here I am!!!";
var s4 = "Hello world!"; // String literal value
var s5 = "Add a string everytime you review this course!";
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
// variable assignment to another variable type
var s3 = s1;
console.log(s3);
// variable assignment of boolean type
var b1 = true;
var b2 = false;
var b3 = true;
var b4 = true;
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
// Using 'any' data type you can assign any type of data i.e. 
// number, string and json to a variable. 
var a1 = 'test';
var z3 = {
    taskId: 1,
    taskPriority: 1000,
    taskStatus: "Done"
};
var a2 = 1;
var a3 = {
    productId: 1,
    productName: "Iphone",
    producType: "Mobile",
    productPrice: 1000
};
console.log(a1);
var a4 = {
    productId: 1,
    productName: "Iphone4",
    producType: "Mobile",
    productPrice: 600
};
var a5 = {
    productId: 2,
    productName: "Android",
    productType: "Mobile",
    productPrice: 1100
};
var a6 = {
    productId: 3,
    productName: "AIPhone",
    productType: "HandheldDevice",
    productPrice: "unknown"
};
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(z3);
// Homogenous array type - Where all data in the array are of the same type.
// What type of data is being carried with in the angular brackets ?
// The square bracket is called the subscript which is similar to how we have in python.
var array1 = ["abd", "bcd", "sadsa"];
var array5 = ["AngularJS", "ReactJS", "NodeJS"];
var array6 = ["Hello", "Namaste", "BonJour", "whatsUp"];
var array4 = [11, 22, 33, 44, 55];
console.log(array1);
console.log(array4);
// This is how you can access element of an array. 
console.log("array2[0]" + array5[0]);
console.log("array2[1]" + array5[1]);
console.log("array2[3]" + array5[3]);
console.log("array2[0-2]" + array5);
console.log(array1[2]);
console.log(array1.length);
console.log('Here is a number array: ' + array4);
console.log('Here is the element at index 2 of the array: ' + array4[2]);
console.log('Here is the length of the array: ' + array4.length);
console.log(array6.length);
console.log('Here is the element at index 0 of the array6: ' + array6[2]);
// Hetrogenous array type using type 'any' 
var array2 = ["abd", "bcd", 123];
var array2 = ["abd", "bcd", "zye", 234, 123];
var array9 = ["Review 1", 2024];
console.log(array2[2]);
console.log(array2[4]);
console.log(array9[0]);
// console is an inbuild object and log is function built for that object. 
// Which logs any information we give it to, on to the web browsers console. 
