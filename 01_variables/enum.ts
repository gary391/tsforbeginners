// Enum is a collections of constants values separated by commas. 
// The values in the enum can't be changed but can be ready only 
// ENUM variable always starts with a capital letter. i.e. Gender, Direction, Shapes, Weekdays etc.
enum Gender {
    Male,
    Female
}

enum Shapes{
    square,
    circle,
    rectangle,
    triangle
}

enum Direction {
    Right,
    Left
}

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
enum WeekEnds{
    Saturday=6, // now you can use index of 6 to represent saturday.
    Sunday=7 // now you can use index of 7 to represent sunday.
}

// we were able to override the default values of 0 and 1 and instead assigned 
// vaules of 6 and 7.
console.log(WeekEnds[6]); // This will give you value 
console.log(WeekEnds[7]);

enum Months{
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December}

console.log(Months[0]);
// we can redefine the index of the enum, and 
enum FinancialMonths {
    January  = 9,
    February = 10,
    March = 11,
    April = 12,
    May = 1,
    June= 2,
    July= 3,
    August= 4,
    September= 5,
    October= 6,
    November= 7,
    December= 8
}

console.log(FinancialMonths[1]);