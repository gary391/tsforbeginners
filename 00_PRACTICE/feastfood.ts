export function feast(beast:string, dish:string):boolean {
    // Your Code
    if  (beast.slice(0,1)===dish.slice(0,1)){
        return true;
    }else{
        return false;
    }
  }

console.log(feast("great blue heron", "garlic naan"))