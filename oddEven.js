function oddEven(num1,num2){
    for(let i = num1; i<=num2; i++){
        if(i%2 == 0){
            console.log("Even Number is = "+ i);
        }
        else if(i%2!=0){
            console.log("Odd Number is = "+ i);
        }
    }

}
oddEven(1,10);