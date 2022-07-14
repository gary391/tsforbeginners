// Write a program to check if the password is valid 
// the password should have the first charater capital alphabets. 
// Ascii character 65 to 90 represent captial alphabets

var password:string = "test@123";
if (password.charCodeAt(0)>=65 && password.charCodeAt(0)<=90){
    console.log('valid password');
}else{
    console.log('password is not valid! '+ password)
}
