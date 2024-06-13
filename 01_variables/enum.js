// Enum is a collections of constants values separated by commas. 
// The values in the enum can't be changed but can be ready only 
// ENUM variable always starts with a capital letter. i.e. Gender, Direction, Shapes, Weekdays etc.
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
// we were able to override the default values of 0 and 1 and instead assigned 
// vaules of 6 and 7.
console.log(WeekEnds[6]); // This will give you value 
console.log(WeekEnds[7]);
var Months;
(function (Months) {
    Months[Months["January"] = 0] = "January";
    Months[Months["February"] = 1] = "February";
    Months[Months["March"] = 2] = "March";
    Months[Months["April"] = 3] = "April";
    Months[Months["May"] = 4] = "May";
    Months[Months["June"] = 5] = "June";
    Months[Months["July"] = 6] = "July";
    Months[Months["August"] = 7] = "August";
    Months[Months["September"] = 8] = "September";
    Months[Months["October"] = 9] = "October";
    Months[Months["November"] = 10] = "November";
    Months[Months["December"] = 11] = "December";
})(Months || (Months = {}));
console.log(Months[0]);
var FinancialMonths;
(function (FinancialMonths) {
    FinancialMonths[FinancialMonths["January"] = 9] = "January";
    FinancialMonths[FinancialMonths["February"] = 10] = "February";
    FinancialMonths[FinancialMonths["March"] = 11] = "March";
    FinancialMonths[FinancialMonths["April"] = 12] = "April";
    FinancialMonths[FinancialMonths["May"] = 1] = "May";
    FinancialMonths[FinancialMonths["June"] = 2] = "June";
    FinancialMonths[FinancialMonths["July"] = 3] = "July";
    FinancialMonths[FinancialMonths["August"] = 4] = "August";
    FinancialMonths[FinancialMonths["September"] = 5] = "September";
    FinancialMonths[FinancialMonths["October"] = 6] = "October";
    FinancialMonths[FinancialMonths["November"] = 7] = "November";
    FinancialMonths[FinancialMonths["December"] = 8] = "December";
})(FinancialMonths || (FinancialMonths = {}));
console.log(FinancialMonths[1]);
