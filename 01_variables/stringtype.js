// String type
var s4 = "you are what you eat!";
var s5 = "all the power is with in you, you can do anything and everything";
var s1 = "<a href=''/>";
var username = 'Gaurav';
var password = 'nowiknowyourpasswords';
// Using backtick you can substituate the variable using a ${} notation
var s2 = "My name is ".concat(username);
var s2 = "You are my buddy ".concat(username);
var s3 = "your password, is ".concat(password);
console.log(s2.length);
console.log(s2);
console.log(s3);
console.log(s2.length);
console.log(s2.charAt(0));
console.log(s2.indexOf('n'));
console.log(s2.lastIndexOf('n')); // last index where the n appears in the string.
console.log(s3.length);
console.log(s3.charAt(0)); // character as particular index 
console.log(s3.indexOf('i'));
// In order to escape special characters we will have to use back slash.
console.log(s3.split(','));
