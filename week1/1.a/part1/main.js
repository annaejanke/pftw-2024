let grid = undefined;
let stroke1 = prompt("What color buttons should frosty have?", "Orange");
let stroke2 = prompt("What is the snowman's name?", "Frosty");

function setup() {
    createCanvas (1000, 800);
    background ("#ccc");
    grid = loadImage("images/100px_grid.png");
}

function draw() {
    background(217, 234, 247);
    // bottom line
    stroke(216, 215, 224);
    fill(220, 200, 224);
    rect(0, 650, 1000);

    // snowman legs 
    fill("#f1f1f1");
    strokeWeight(5);
    stroke(0);
    // buttom circle
    stroke("#f1f1f1");
    ellipse(500, 600, 300);
    // middle circle
    ellipse(500, 400, 250, 250);
    // top circle / head 
    ellipse(500, 200, 200);
    // hat bim
    stroke(0, 0, 0);
    strokeWeight(30);
    line(400, 120, 600, 120);
    // hat body
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    // eyes
    stroke(0);
    strokeWeight(20);
    point(450, 200);
    point(550, 200);
    // mouth
    noFill();
    strokeWeight(10);
    arc(500, 240, 70, 50, 0, 3);
    // buttons
    fill(236, 154, 47);
    strokeWeight(0);
	ellipse(500, 350, 15);
	ellipse(500, 400, 15);
	ellipse(500, 450, 15);
       
}
