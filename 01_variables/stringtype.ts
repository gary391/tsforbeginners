// String type

var s4:string ="you are what you eat!";
var s5:string ="all the power is with in you, you can do anything and everything";
var s1:string = "<a href=''/>";
var username:string  = 'Gaurav';
var password:string = 'nowiknowyourpasswords';
var todayIs:string = 'Thursday';
// Using backtick you can substituate the variable using a ${} notation
var s2:string = `My name is ${username}`;
var s3:string = `You are my buddy ${username}`;
var s4:string =`your password, is ${password}`;
var s5:string =`Today is ${todayIs}`;
console.log(s2.length)
console.log(s2);
console.log(s3);
console.log(s2.length); // length of a string.
console.log(s2.charAt(0)); //character at an index
console.log(s2.indexOf('n')); // index of the that charater
console.log(s2.lastIndexOf('n')); // last index where the n appears in the string.
console.log(s3.length);
console.log(s3.charAt(0)); // character as particular index 
console.log(s3.indexOf('i'));

// In order to escape special characters we will have to use back slash.
console.log(s3.split(',')[0]);
console.log(s3.split(',')[1]);
console.log(s5);


