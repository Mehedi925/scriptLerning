let products = [
    {name:'Laptop',brand:'DELL',price:45000},
    {name:'Mobile',brand:'Apple',price:85000},
    {name:'Monitor',brand:'DELL',price:45000},
    {name:'Box',brand:'Microlab',price:5000},
    {name:'Watch',brand:'Apple',price:15000},
    {name:'Mobile',brand:'Samsung',price:35000},
    {name:'HeadPhone',brand:'Airpod',price:10000}

];
function productShop(products,searchbox){
    console.log(products);
    for(const product of products){
        console.log(product);
    }
}
productShop(products);