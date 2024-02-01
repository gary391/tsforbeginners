// Here if x will match with 1 the block corresponding with case 1 will be executed
// Note Case is block of code, and its not doing any arithematic operations
// so if we don't have a break statement than subsequent line of code will be 
// executed, until the next break statement is encountered. 

var x:number = 1; 

switch(x){
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