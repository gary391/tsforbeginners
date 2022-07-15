// Restricting the overloaded function for a specific data type
function doubleMe(x:number);
function doubleMe(x:string);

// doubleMe function for string and number 
// overloading
function doubleMe(x:any) {
    // Condition to check if x exists and typeof x is a number. 
    if (x && typeof x === 'number'){
        console.log (x*2);
    }else if (x && typeof x === 'string')
        console.log(x+x);
    }

doubleMe(11);
// doubleMe([1,2,4]);
doubleMe('Gamma');