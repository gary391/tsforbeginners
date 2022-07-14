var email = "test@test.com";
var atpostion = email.indexOf('@');
var dotpostion = email.indexOf('.');
if (atpostion == -1 || dotpostion == -1) {
    console.log("Invalid email id ".concat(email));
}
else {
    console.log("Valid email id ".concat(email));
}
