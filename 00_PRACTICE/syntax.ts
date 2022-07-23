// function multiply(a: number, b: number): number {
//     return a + b;
//   }
// console.log(multiply(2,3))

// export function hero(bullets: number, dragons: number): boolean {
//     if (bullets/2 > dragons){
//         return false
//     }else{
//         return true;
//     }
    

//   }

/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

*/

var courses:any =[];
// var i = 1; 
export const reverseSeq = (n: number): number[] => {
    // return [];
    while (1<=n){
//         console.log(n);
        courses.push(n);
        n=n-1;

    }
    return courses;
  };

console.log(reverseSeq(5))