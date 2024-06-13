/*
Using setInterval to fire a function given a frequency.
It will return an intevalID which can be passed to clearInterval to cancel the 
interval.
*/

var counter = 5;
// Your code below 


// setInterval
//setInterval(func, delay)

// set up an interval that runs every 1000 milliseconds(1 second)
var intervalId = setInterval(function() {

    // Decrease the counter by 1
    counter--;

    // Log the counter to the console
    console.log(counter);

    // If the counter reaches 0, clear the interval
    if (counter === 0) {
        clearInterval(intervalId);
        console.log('counter has reached 0, stopping.')
    }
}, 1000); //1000 milliseconds = 1 second

//-----------------------------
//-----------------------------
//-----------------------------

//setTimeout(func, delay) executes a function or specific piece of code once the time expires.
//clearTimeout
/**
 *setTimeout will fire a function after the delay milliseconds. The function 
 will only be fired once. Similarly you can use the returned timeoutID and clear 
 TimeoutID and clearTimeout to cancel the timeout.
 */

// var counter1 = 5;
// let timeoutID;
// function decrementor(){
//     var timeoutID = setTimeout(function (){
//         console.log(counter1);
//         counter1--;
//         if (counter1>=0){
//             clearTimeout(timeoutID)
//             console.log('counter has reached 0, stopping.')
//         }
//     },1000);

// }
// decrementor();


