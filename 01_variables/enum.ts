// Collections of constants values separated by commas. 

enum Gender {
    Male,
    Female
}

enum Direction {
    Right,
    Left
}

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


console.log(WeekEnds[6]); // This will give you value 
console.log(WeekEnds[7]);