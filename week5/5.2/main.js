let bubble1;
let bubble2;
let bubble3;
let bubble4;

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble(200, 200, 40);
    bubble2 = new Bubble(400, 200, 20);
    bubble3 = new Bubble(100, 200, 10);
    bubble4 = new Bubble(500, 200, 25);
}

function draw() {
    background('lavender');
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.move();
    bubble3.show();
    bubble4.move();
    bubble4.show();
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill(255, 0, 100, 50);
        ellipse(this.x, this.y, this.r * 2);
    }
}