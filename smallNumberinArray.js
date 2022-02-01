function largestNumber(number){
    let len = number.length;
    let smallest = number[0];
    for(let i = 0; i<len; i++){
        let element = number[i];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;
}
let arr = [25,55,4,1,-4,3,56,77,66,30];
let result = largestNumber(arr);
console.log(result);