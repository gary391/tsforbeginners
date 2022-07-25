export function getGrade(a: number, b: number, c: number): string {
    // your code here
    var avg = (a+b+c)/3;
    if (avg <= 100 && avg >=90){
      return 'A';
    }else if (avg <= 90 && avg >= 80){
      return 'B';
    }else if (avg <= 80 && avg >= 70){
      return 'C';
    }else if (avg <= 70 && avg >= 60){
      return 'D';
    }else{
      return 'F'
    }
  }

console.log(getGrade(90,89,97))