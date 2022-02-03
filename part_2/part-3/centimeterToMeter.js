function centimeterToMeter(centimeter){
    const meter = centimeter / 100;
    return meter.toFixed(2);
}
let centimeter = 560;
console.log(centimeter +" Centimeter to meter : "+ centimeterToMeter(centimeter));