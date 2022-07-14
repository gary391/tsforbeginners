// Note Case is block of code, and its not doing any arithematic operations
// so if we don't have a break statement that subsequent line of code will be 
// executed. 

var x:number = 2; 

switch(x){
    case 1:
    case 2:
    console.log('Common Logic');
    break;
    case 3:
    console.log('Case 3');
    break;
    default:
    console.log('default');
}