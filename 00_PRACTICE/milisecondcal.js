"use strict";
exports.__esModule = true;
exports.past = void 0;
function past(h, m, s) {
    //#Happy Coding! ^_^
    var milisechour = h * 3600000;
    var milisecminute = m * 60000;
    var milisecsec = s * 1000;
    if (h !== 0) {
        milisechour = h * 3600000;
    }
    else if (m !== 0) {
        milisecminute = m * 60000;
    }
    else if (s !== 0) {
        milisecsec = s * 1000;
    }
    return (milisechour + milisecminute + milisecsec);
}
exports.past = past;
console.log(past(1, 1, 1));
