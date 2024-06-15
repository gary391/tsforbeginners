// Here if x will match with 1 the block corresponding with case 1 will be executed
// Note Case is block of code, and its not doing any arithematic operations
// so if we don't have a break statement than subsequent line of code will be 
// executed, until the next break statement is encountered. 
// Here even if we have 1 or 2 we will get Comman logic
var x = 4;
switch (x) {
    case 1: //Here for both case 1 and case 2 we have the same logic i.e. console.log ('common logic) with no break
    case 2: //Here for both case 1 and case 2 we have the same logic i.e. console.log ('common logic) with no break
        console.log('Common Logic');
        break;
    case 3:
        console.log('Case 3');
        break;
    default:
        console.log('default');
}
var y = 1;
switch (y) {
    case 1:
        console.log("Mera Case 1");
    // break;
    case 2:
        console.log("Mera Case 2");
        break;
    default:
        console.log("Default");
}
var z = 90;
switch (z) {
    case 90:
        console.log("This is case 90");
    // break;
    case 100:
        console.log("This is case 100");
        break;
    default:
        console.log("This is Default");
}
