enum Gender{
    Male,
    Female
}

console.log(Gender.Male); // This will give you index value
console.log(Gender.Female); // This will give you index value

console.log(Gender[0]); // This will give you value 
console.log(Gender[1]);


// Here we can assign the index value to the enum object instead of default value. 
enum Weekends{
    Saturday=6,
    Sunday=7
}


console.log(Weekends[6]); // This will give you value 
console.log(Weekends[7]);