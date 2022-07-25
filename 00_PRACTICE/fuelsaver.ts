export const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => {
    // throw new Error("Not implemented");
    return (distance/mpg > fuelLeft?true:false);
    
  };

console.log(zeroFuel(100,25,2))