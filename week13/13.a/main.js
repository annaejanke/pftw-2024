let cloudx = 100;
let cloudy = 100;
let blue = 189;

function setup() {
    createCanvas(1650, 800);
}

function draw() {
    background("#87CEEB");
    makeCloud(cloudx, cloudy-50);
    makeCloud(cloudx + 100, cloudy + 100)
    makeCloud(cloudx + 150, cloudy + 250)
    makeCloud(cloudx + 50, cloudy + 350)
    makeCloud(cloudx + 400, cloudy + 150)
    fill(220)
    noStroke();
    cloudx+=0.1;
    blue--;

    fill(255, 204, 0);
    noStroke();
    circle(1200, 100, 150);
}

function makeCloud(cloudx, cloudy) {
    fill(250)
    noStroke();
    ellipse(cloudx, cloudy, 90, 70);
    ellipse(cloudx + 30, cloudy + 10, 100, 80);
    ellipse(cloudx - 40, cloudy + 10, 90, 70);
}