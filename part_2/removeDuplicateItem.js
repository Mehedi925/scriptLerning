function removeDuplicateItems(cars){
    let unique = [];
    let allItems;
    for ( allItems of cars){
        console.log(allItems);
        if(unique.indexOf(allItems) == -1){
            unique.push(allItems);
        }
    }
    return unique;

}
let cars = ['bmw','audi','toyota','bugadi','audi','honda','toyota','honda','bmw','volvo'];
console.log("unique cars item = "+removeDuplicateItems(cars));
