// Write a program to check if the password is valid 
// the password should have the first charater capital alphabets. 
// Ascii character 65 to 90 represent captial alphabets

// var password:string = "test@123";
// // Checking if the first character of the password is capital or not.
// if (password.charCodeAt(0)>=65 && password.charCodeAt(0)<=90){
//     console.log('valid password');
// }else{
//     console.log('password is not valid! '+ password)
// }

// Define a variable of type string 
var password:String = "test@123"
// conditional statement

if((password.charCodeAt(0)>=65)|| password.charCodeAt(90)){
    console.log(`This is a valid password: ${password}`)
}else{
    console.log(`Is not a valid: ${password}`)
}

// Define a variable of type string
var username:String = "Testuser"

// conditional statement

if (username.charCodeAt(0)>=65 && username.charCodeAt(0)<=90){
    console.log('valid username');
} else {
    console.log('not a valid username')
}