function reverseString(sentence){
    let reverse = "";
    for(let letter of sentence){
        console.log(letter);
        // reverse = reverse + letter;
        reverse = letter + reverse;
    }
    return reverse;
}
let sentence = "Hellow Mehedi Hasan!"
console.log(reverseString(sentence));