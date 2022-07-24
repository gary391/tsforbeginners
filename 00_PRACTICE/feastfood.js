"use strict";
exports.__esModule = true;
exports.feast = void 0;
function feast(beast, dish) {
    // Your Code
    if (beast.slice(0, 1) === dish.slice(0, 1)) {
        return true;
    }
    else {
        return false;
    }
}
exports.feast = feast;
console.log(feast("great blue heron", "garlic naan"));
