function setup ( ) {
    createCanvas(600,600);
}

function createTile(originX, originY, primaryColor = 'plum', xlines = 'white', fillcircles = 'pink', innercircles = 'lightblue', outercircles = 'lemonchiffon', smallcircle = 'mediumpurple') {
    translate (originX, originY); 
    // rectangle
    fill(primaryColor);
    rect(0, 0, 200, 200);
    // corner lines
    stroke(xlines);
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    // filled in large circles
    noStroke();
    fill(fillcircles);
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    // outline inner circle
    noFill();
    stroke(innercircles);
    strokeWeight(5);
    circle(100, 100, 100);
    // outer outlined circles
    noFill();
    stroke(outercircles);
    circle(50, 50, 75);
    circle(150, 50, 75);
    circle(150, 150, 75);
    circle(50, 150, 75);
    // filled in small circle
    noStroke();
    fill(smallcircle);
    circle(100, 100, 25);
}

function draw() {
    createTile(0, 0, 'plum', 'white', 'pink', 'lightblue', 'lemonchiffon', 'mediumpruple');
    createTile(0, 200, 'steelblue', 'silver', 'skyblue', 'springgreen', 'thistle', 'snow');
    createTile(0, 200, 'plum', 'white', 'pink', 'lightblue', 'lemonchiffon', 'mediumpruple');
    createTile(200, -400, 'steelblue', 'silver', 'skyblue', 'springgreen', 'thistle', 'snow');
    createTile(0, 200, 'plum', 'white', 'pink', 'lightblue', 'lemonchiffon', 'mediumpruple');
    createTile(0, 200, 'steelblue', 'silver', 'skyblue', 'springgreen', 'thistle', 'snow');
    createTile(200, -400, 'plum', 'white', 'pink', 'lightblue', 'lemonchiffon', 'mediumpruple');
    createTile(0, 200, 'steelblue', 'silver', 'skyblue', 'springgreen', 'thistle', 'snow');
    createTile(0, 200, 'plum', 'white', 'pink', 'lightblue', 'lemonchiffon', 'mediumpruple');
}