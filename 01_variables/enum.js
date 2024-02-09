// Collections of constants values separated by commas. 
// The values in the enum can't be changed but can be ready only 
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var Shapes;
(function (Shapes) {
    Shapes[Shapes["square"] = 0] = "square";
    Shapes[Shapes["circle"] = 1] = "circle";
    Shapes[Shapes["rectangle"] = 2] = "rectangle";
    Shapes[Shapes["triangle"] = 3] = "triangle";
})(Shapes || (Shapes = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Right"] = 0] = "Right";
    Direction[Direction["Left"] = 1] = "Left";
})(Direction || (Direction = {}));
// This will give the index of the enum
console.log(Shapes.circle); // 1
console.log(Shapes.square); // 0 
console.log(Shapes.triangle); // 3
console.log(Shapes.rectangle); // 2
// This will give the value of the enum
console.log(Shapes[0]); // 2
console.log(Shapes[2]); // 2
console.log(Shapes[3]); // 2
console.log(Direction.Left); //This will give you index value
console.log(Direction.Right); //This will give you index value
console.log(Direction[0]);
console.log(Direction[1]);
console.log(Gender.Male); // This will give you index value
console.log(Gender.Female); // This will give you index value
console.log(Gender[0]); // This will give you value 
console.log(Gender[1]);
// Here we can assign the index value to the enum object instead of default value. 
var WeekEnds;
(function (WeekEnds) {
    WeekEnds[WeekEnds["Saturday"] = 6] = "Saturday";
    WeekEnds[WeekEnds["Sunday"] = 7] = "Sunday"; // now you can use index of 7 to represent sunday.
})(WeekEnds || (WeekEnds = {}));
console.log(WeekEnds[6]); // This will give you value 
console.log(WeekEnds[7]);
