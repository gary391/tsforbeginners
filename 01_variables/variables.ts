// Number assignment to a variable
// var is the key word to define a variable in typescript.
// General syntax is var <name of the variable>:<Type of the variable> = <value of the variable>;
var n1:number = 1000;
console.log (n1);

// String assignment to a variable 
var s1:string = "You are the creator of your destiny";
var s2:string = `All the power is with in you, you can do anything and everything`;
var s3:string = `Hello world here I am!!!`
var s4:string = "Hello world!" // String literal value
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

// variable assignment to another variable type
var s3:string = s1;
console.log(s3);

// variable assignment of boolean type

var b1:boolean = true;
var b2:boolean= false;
var b3: boolean=true;
console.log(b1);
console.log(b2);
console.log(b3);

// Using 'any' data type you can assign any type of data i.e. 
// number, string and json to a variable. 

var a1:any = 'test'
var z3:any ={
    taskId:1,
    taskPriority:1000,
    taskStatus: "Done"
};
var a2:any = 1
var a3:any = {
    productId:1,
    productName: "Iphone",
    producType: "Mobile",
    productPrice: 1000
};
console.log(a1);
var a4:any = {
    productId:1,
    productName: "Iphone4",
    producType: "Mobile",
    productPrice: 600
};

var a5:any = {
    productId: 2,
    productName: "Android",
    productType: "Mobile",
    productPrice: 1100
}
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(z3);

// Homogenous array type - Where all data in the array are of the same type.
// What type of data is being carried with in the angular brackets ?
// The square bracket is called the subscript which is similar to how we have in python.

var array1:Array<string> = ["abd", "bcd", "sadsa"];
var array5:Array<string> = ["AngularJS", "ReactJS", "NodeJS"]
var array4:Array<number> = [11,22,33,44,55]
console.log(array1);
console.log(array4);
console.log("array2[0]" + array5[0]);
console.log("array2[1]" + array5[1]);
console.log("array2[3]" + array5[3]);
console.log("array2[0-2]" + array5);

console.log(array1[2]);
console.log(array1.length);
console.log('Here is a number array: '+ array4);
console.log('Here is the element at index 2 of the array: '+array4[2]);
console.log('Here is the length of the array: '+ array4.length);

// Hetrogenous array type using type 'any' 

var array2:Array<any> = ["abd", "bcd", 123];
var array2:Array<any> = ["abd", "bcd","zye",234, 123];
console.log(array2[2]);
console.log(array2[4]);


// console is an inbuild object and log is function built for that object. 
// Which logs any information we give it to, on to the web browsers console. 





