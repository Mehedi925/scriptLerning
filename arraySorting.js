let array = [1,34,54,22,556,32,55,67,89,300];
let len = array.length;
let series = " ";
for(let i = 0; i<len; i++){
    for(j = i; j<len; j++){
        if (array[j] > array[j+1]){
            [array[j], array[j+1]] = [array[j+1], array[j]]; 
        }
    }
}
console.log(array);