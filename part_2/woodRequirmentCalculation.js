function woodCalculation(chair,table,bed){
    const perChairWood = 5, perTableWood = 10, perBedWood = 50;
    const perChairPrice = 5000, perTablePrice = 10000, perBedPrice = 20000;

    let totalChairWood = perChairWood * chair;
    let totalTableWood = perTableWood * table;
    let totalBedWood = perBedWood * bed;
    let totalWood = totalChairWood + totalTableWood + totalBedWood;
    console.log('Your total wood cost is - '+ totalWood);

    let totalChairPrice = perChairPrice * chair;
    let totalTablePrice = perTablePrice * table;
    let totalBedPrice = perBedPrice * bed;
    let totalPrice = totalChairPrice + totalTablePrice + totalBedPrice;
    console.log('Your total cost is - '+ totalPrice);
    // return { totalWood , totalPrice};

}
let chair = 1, table = 1, bed = 1;
const total = woodCalculation(chair,table,bed);
console.log(total);