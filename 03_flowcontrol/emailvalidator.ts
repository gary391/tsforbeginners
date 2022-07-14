var email: string = "test@test.com";
var atpostion:number = email.indexOf('@');
var dotpostion:number = email.indexOf('.');

if (atpostion == -1 || dotpostion == -1) {
    console.log(`Invalid email id ${email}`);
}else{
    console.log(`Valid email id ${email}`);
}