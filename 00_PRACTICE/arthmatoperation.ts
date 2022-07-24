// Write a function to pass in arthematic operator i.e. string into an expression.  

export function basicOp(operation: string, value1: number, value2: number): number {
    // Good luck!
    if (operation === '+'){
      return value1 + value2;
    }else if(operation === '-'){
      return value1 - value2;
    }else if(operation === '*'){
      return value1 * value2;
    }else {
      return value1 / value2;
    }
   
}