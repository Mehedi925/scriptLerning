function oddEven(num1,num2){
    let oddNumber = [];
    let evenNumber = [];

    for(let i = num1; i<=num2; i++){
        if(i%2 == 0){
            evenNumber.push(i);
        }
        else{
            oddNumber.push(i);
        }
    }
    console.log("even number is "+evenNumber);
    console.log("odd number is "+oddNumber);
}
oddEven(1,10);
