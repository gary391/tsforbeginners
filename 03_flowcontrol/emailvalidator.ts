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
var email:String ="test@test.com"; 
var atPostion:number = email.indexOf('@');
console.log(atPostion);
var dotPostion:number=email.indexOf('.');
console.log(dotPostion);

// -1 represents not present

// Conditional statement to check if the element exist in the string 
if((atPostion === -1) || (dotPostion === -1)){
    console.log(`Invalid email ${email}`);
}else{
    console.log(`May be a valid ${email}`)
}
