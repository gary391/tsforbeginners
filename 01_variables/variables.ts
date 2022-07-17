// Number assignment to a variable
var n1:number = 10;
console.log (n1);

// String assignment to a variable 
var s1:string = "You are the creator of your destiny";
var s2:string = `All the power is with in you, you can do anything and everything`;
console.log(s1);
console.log(s2);

// variable assignment to another variable type
var s3:string = s1;
console.log(s3);

// variable assignment of boolean type

var b1:boolean = true;
var b2:boolean= false;
console.log(b1);
console.log(b2);

// any data type with number, string and json assignment

var a1:any = 'test'
var a2:any = 1
var a3:any = {
    productId:1,
    productName: "Iphone",
    producType: "Mobile",
    productPrice: 1000
}
console.log(a1)
console.log(a2)
console.log(a3)

// Homogenous array type - Where all data in the array are of the same type.


var array1:Array<string> = ["abd", "bcd", "sadsa"];
console.log(array1);
console.log(array1[2]);
console.log(array1.length);

// Hetrogenous array type using type any 

var array2:Array<any> = ["abd", "bcd", 123];
console.log(array2[2]);


// console is an inbuild object and log is function built for that object. 


