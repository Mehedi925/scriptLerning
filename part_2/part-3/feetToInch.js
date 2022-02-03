function feetToInch (feet){
    const inch = feet/12;
    return inch.toFixed(2);
}
let feet = 56;
console.log(feet +" Feet to inch : "+ feetToInch(feet));