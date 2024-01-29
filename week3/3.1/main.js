function setup ( ) {
    createCanvas(200,200);
}

function createTile (){
    // rectangle 
    translate (0, 0);
    fill('plum');
    rect(0, 0, 200, 200);
    // corner lines
    stroke('white');
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    // filled in large circles
    noStroke();
    fill('pink');
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    // outline inner circle
    noFill();
    stroke('lightblue');
    strokeWeight(5);
    circle(100, 100, 100);
    // outer outlined circles
    noFill();
    stroke('lemonchiffon');
    circle(50, 50, 75);
    circle(150, 50, 75);
    circle(150, 150, 75);
    circle(50, 150, 75);
    // filled in small circle
    noStroke();
    fill('mediumpurple');
    circle(100, 100, 25);
}

function draw() {
    createTile();
    noLoop();
}