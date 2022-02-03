function negativeNumber(array){
    let newArray = [];
    for(const element of array){
        if(element >= 0){
            newArray.push(element);
        }else{
            break;
        }
    }
    return newArray;
}

const array = [22,3,2,55,66,43,-2,55,77,-20];
let result = console.log(negativeNumber(array));