// doubleMe function for string and number 
// overloading
function doubleMe(x) {
    // Condition to check if x exists and typeof x is a number. 
    if (x && typeof x === 'number') {
        console.log(x * 2);
    }
    else if (x && typeof x === 'string')
        console.log(x + x);
}
doubleMe(11);
doubleMe('Gamma');
