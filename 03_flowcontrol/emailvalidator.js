// var email: string = "test@test.com";
// var atpostion:number = email.indexOf('@');
// var dotpostion:number = email.indexOf('.');
// // -1 represents not present, here we are checking for a @ sign or a dot if either is present.
// if (atpostion == -1 || dotpostion == -1) {
//     console.log(`Invalid email id ${email}`);
// }else{
//     console.log(`Valid email id ${email}`);
// }
// Define a variable email string
// We will perform two basic checks one if the string has @ sign and has a dot notation.
var email = "test@test.com";
// indexOf method will return the index where we have the @ symbol.
// if the @ symbol is not there than a value of -1 will be returned.
var atPostion = email.indexOf('@');
console.log(atPostion);
var dotPostion = email.indexOf('.');
console.log(dotPostion);
// -1 represents not present
// Conditional statement to check if the element exist in the string 
if ((atPostion === -1) || (dotPostion === -1)) {
    console.log("Invalid email ".concat(email));
}
else {
    console.log("May be a valid ".concat(email));
}
var excitedString = 'Hey!';
var exPostion = excitedString.indexOf('!');
console.log("exPostion: ".concat(exPostion));
if (exPostion === -1) {
    console.log("you don't sound very excited with a ".concat(excitedString));
}
else {
    console.log('You sound very excited!!!');
}
