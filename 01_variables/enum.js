var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male); // This will give you index value
console.log(Gender.Female); // This will give you index value
console.log(Gender[0]); // This will give you value 
console.log(Gender[1]);
var Weekends;
(function (Weekends) {
    Weekends[Weekends["Saturday"] = 6] = "Saturday";
    Weekends[Weekends["Sunday"] = 7] = "Sunday";
})(Weekends || (Weekends = {}));
console.log(Weekends[6]); // This will give you value 
console.log(Weekends[7]);
