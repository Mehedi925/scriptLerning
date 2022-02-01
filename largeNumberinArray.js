function largestNumber(number){
    let len = number.length;
    let largest = number[0];
    for(let i = 1; i<len; i++){
        let element = number[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
let arr = [25,55,4,3,56,77,66,30,80];
let result = largestNumber(arr);
console.log(result);