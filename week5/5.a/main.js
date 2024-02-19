let myCard;
const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {
    totalPairs: 6,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardfaceArray = [];
let cardback;
function preload() {
    cardback = loadImage('images/card_front.webp');
    cardfaceArray = [
        loadImage('images/card_back_1.webp'),
        loadImage('images/card_back_2.webp'),
        loadImage('images/card_back_3.webp'),
        loadImage('images/card_back_4.webp'),
        loadImage('images/card_back_5.webp'),
        loadImage('images/card_back_6.webp'),
    ]
}
function setup() {
    createCanvas(1500, 1000);
    // background('lavender');
    let selectedFaces = [];
    for (let z = 0; z < 6; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];

        selectedFaces.push(face);
        selectedFaces.push(face);

        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i <6; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 175;
        }
        startingY += 250;
        startingX = 100;
    }
}

function draw () {
    background('lavender');
    fill(0);
    textSize(36);
    text("Mario's Matching Party", 100, 80);
    if (gameState.numMatched === gameState.totalPairs) {
        fill('purple');
        textSize(66);
        text('YOU WIN!', 400, 650);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if(!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(0);
    textSize(36);
    text('attempts:' + gameState.attempts, 100, 600);
    text('matches:' + gameState.numMatched, 100, 650);
}

function mousePressed () {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        // first check flipped cards length and then we can trigger the flip
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
       if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // cards match! Time to score!
            // mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty flipped cards array
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++;
            loop();
       } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout (() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
       }
    }
}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 200;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    } 
    show () {
        if(this.face === UP || this.isMatch) {
            noFill();
            rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImg, this.x, this.y, 150, 200);
        } else {
            image(cardback, this.x, this.y, this.width, this.height);
            noFill();
            rect(this.x, this.y, this.width, this.height);
            // fill(0);
            // noStroke();
            // rect(this.x, this.y, this.width, this.height);
            // image(cardback, this.x, this.y, this.width, this.height);
            // image(cardback, this.x, this.y, this.width + 10, this.height + 10, 0, 0, cardback.width, cardback.height, COVER);
        }
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && 
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
            }
    }

    flip () {
        if(this.face == DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

function shuffleArray(array) {
    let counter = array.length;
    while (counter > 0) {
        const idx = Math.floor(Math.random() * counter);
        counter--;
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}

