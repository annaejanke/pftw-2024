const rectWidth = 150;
const rectHeight = 200;

let startingX = 200;
let startingY = 100;
let myCards = [];
let startingId = 0;
function setup () {
    createCanvas(1500, 1000);
    background('lavender');
    for (let k = 0; k < 2; k++) {
        for (let i = 0; i < 6; i++) {
            rect(startingX, startingY, rectWidth, rectHeight);
            myCards.push({ x: startingX, y: startingY, id: startingId });
            startingX = startingX + rectWidth + 50;
            startingId++;
        }
        startingY += startingY + rectHeight + 50;
        startingX = 200;
    }
    
    console.log(myCards);
}