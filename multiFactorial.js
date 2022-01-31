
function getMultiFactorials(number){
    let fact = 1;
    let x;
    for(let i = 1; i<=number; i++){
        for(let j = i; j<=i; j++){
             fact *= j;
             x = i + " of factorial is = " + fact;
             console.log(x); 
        }
        
    }
 
}
getMultiFactorials(10);