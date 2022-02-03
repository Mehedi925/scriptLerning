function paperRequirments(firstPaper,secondPaper,thirdPaper){
    const paperOne = 100;
    const paperSecond = 200;
    const PaperThird = 500;
    let paperOneCost = paperOne * firstPaper;
    let paperSecondCost = paperSecond * secondPaper;
    let paperThirdCost = PaperThird * thirdPaper;
    
    let totalPaperCost = paperOneCost + paperSecondCost + paperThirdCost;
    return totalPaperCost;

}
let first = 5, second = 5, third = 5;
const result = paperRequirments(first,second,third);
console.log("Your total Paper Cost is : "+ result + " pages");