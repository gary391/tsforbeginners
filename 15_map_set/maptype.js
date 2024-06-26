// For compilating map use the following command:
// tsc --lib "ES2016,DOM" maptype.ts otherwise it will give you error. 
// create a map 
// Each entry [key, value] will be inside a array or square bracket.
// creating and initializing a map
var studentScore = new Map([["Raja", 50], ["John", 90], ["Bob", 80]]);
// For getting the value we use the get method, by passing in the key values. 
console.log(studentScore.get("john"));
// For adding values to a map we use set method.
studentScore.set("Gary", 100);
console.log(studentScore.get("Gary"));
// How to get the size of the map 
console.log(studentScore.size);
//Delete an entry from the map. 
// Here we will have to pass in the key 
studentScore.delete("Gary");
// How to check if the map has a key, value for a specific using a key
// This will return a boolean value  i.e. true or false.
studentScore.has("Gary");
console.log("studentScore.has(\"Gary\"): ".concat(studentScore.has("Gary")));
// clear method clear all the map entries
// studentScore.clear()
// console.log(studentScore.has("John"))
// This will return all the keys in the map as an iterator 
// Which you can iterate over using a for loop. 
console.log(studentScore.keys());
// How to iterate over an iterator 
for (var _i = 0, _a = Array.from(studentScore.keys()); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
    console.log(studentScore.get(key));
}
// The values only return the values, via an iterator
console.log(studentScore.values());
for (var _b = 0, _c = Array.from(studentScore.values()); _b < _c.length; _b++) {
    var value = _c[_b];
    console.log(value);
}
// To get all the entries, use entries 
console.log(studentScore.entries());
