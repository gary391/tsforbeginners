// Restricting the overloaded function for a specific data type i.e. number and string
function doubleMe(x:number);
function doubleMe(x:string);

// doubleMe function for string and number 
// overloading a function using the any data type

function doubleMe(x:any) {
    // Here x && condition is to check if x exists and typeof x is a number. 
    // Here if x is undefined that you will have an error. 
    if (x && typeof x === 'number'){
        console.log (x*2);
    } else if (x && typeof x === 'string')
        console.log(x+" " +x);
    }

doubleMe(100);
// doubleMe([1,2,4]); // This is give an error as the function has been overloaded to a specific data type. 
doubleMe('John');

// Using this we can restrict the tripleMe function to number and string type only.
// This will help restrict the overloaded function to be used to a specific type.

function tripleMe(x:number);
function tripleMe(x:string);

// TripleMe function for string and number
// overloading a function using the any data type.

function tripleMe(x: any){
    // Here we are checking if x has a value i.e. exists and is not undefined.
    if (x && typeof x==="number"){
        console.log(x*3);
    } else if (x && typeof x ==="string") {
        console.log (x+" "+x+" "+x);
    }
}

tripleMe(10);
tripleMe("James")
//tripleMe([1,2,44,5]) This will give an error, due to the restriction.