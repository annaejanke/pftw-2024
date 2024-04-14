let numLines = 1500;

function setup() {
    createCanvas(1200, 600);
    strokeWeight(1);
    background(255);
  }
  
  function draw() {
    for (i = 0; i < numLines; i++) {
        stroke(random(255), random(255), random(255));
        line(random(width), random(height), random(width), random(height));
    }

    noLoop();
  }