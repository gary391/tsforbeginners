// Union allows to combine values two different of values 

var sn:string | number; // Now sn can hold both string and numbers.
sn = 'Gaurav'
sn = 10 
var meraname: number|string;
meraname = "Gaurav";
meraname = "3";
console.log(meraname);
console.log(sn);

var whatIsThis: number|string;
whatIsThis = 1;
whatIsThis = "One";
console.log(whatIsThis);
console.log(whatIsThis);

let age: number|string;

age = 25;
// age = "Twenty-Five";

function getAge(): number | string {
    return age;
}

const myAge: number | string = getAge();
const myAgeAsString: number | string = getAge();


console.log(myAge);
console.log(myAgeAsString);