function cheapestPhone(phones){
    let bestPhone = [];
    for (const allItems of phones){
        console.log(allItems);
        if (allItems.price <= 20000){
            bestPhone.push(allItems);
        }
    }
    console.log( bestPhone);
}
const phones = [
    {phone:"iphone", display:5.5, price: 55000, color: "black" },
    {phone:"xaiomi",display: 6.5, price: 20000, color: "black"},
    {phone:"Nokia",display: 6.5, price: 32000, color: "blue"},
    {phone:"Mi",display: 6.5, price: 22000, color: "black"},
    {phone:"Samsung",display: 6.5, price: 15000, color: "Blue"},
    {phone:"Realmi",display: 6.5, price: 18000, color: "black"},
    {phone:"Oneplus",display: 6.5, price: 40000, color: "black"}  
];
cheapestPhone(phones);