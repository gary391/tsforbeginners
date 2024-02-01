// Collections of constants values separated by commas. 
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Right"] = 0] = "Right";
    Direction[Direction["Left"] = 1] = "Left";
})(Direction || (Direction = {}));
console.log(Direction.Left); //This will give you index value
console.log(Direction.Right); //This will give you index value
console.log(Direction[0]);
console.log(Direction[1]);
console.log(Gender.Male); // This will give you index value
console.log(Gender.Female); // This will give you index value
console.log(Gender[0]); // This will give you value 
console.log(Gender[1]);
// Here we can assign the index value to the enum object instead of default value. 
var Weekends;
(function (Weekends) {
    Weekends[Weekends["Saturday"] = 6] = "Saturday";
    Weekends[Weekends["Sunday"] = 7] = "Sunday"; // now you can use index of 7 to represent sunday.
})(Weekends || (Weekends = {}));
console.log(Weekends[6]); // This will give you value 
console.log(Weekends[7]);
