"use strict";
exports.__esModule = true;
exports.zeroFuel = void 0;
var zeroFuel = function (distance, mpg, fuelLeft) {
    // throw new Error("Not implemented");
    return (distance / mpg > fuelLeft ? true : false);
};
exports.zeroFuel = zeroFuel;
console.log((0, exports.zeroFuel)(100, 25, 2));
