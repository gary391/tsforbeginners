// Collections of constants values separated by commas. 
// The values in the enum can't be changed but can be ready only 
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