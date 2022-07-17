var s1:string = "<a href=''/>";
var username:string  = 'Gaurav'

// Using backtick you can substituate the variable using a ${} notation
var s2:string = `My name is ${username}`;
console.log(s2);

console.log(s2.length);
console.log(s2.charAt(0));
console.log(s2.indexOf('n'));
console.log(s2.lastIndexOf('n'));
