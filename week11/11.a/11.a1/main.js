const lines = 1000;
let lineHeights = [];

function setup() {
  createCanvas(1200, 600);

  for(let x = 0; x < lines; x++){
    const lineHeight = random(height);
    lineHeights[x] = lineHeight;
  }
}

function draw() {
  background(255);

  for(let i = 0; i < lines; i++){

    const x = width * (i / lines);
    const lineWidth = width / lines;

    const lineColor = random(255);
    const secondLineColor = random(255);

    fill(lineColor);
    stroke(lineColor);
    rect(x, height / 2 - lineHeights[i] / 2,
         lineWidth, lineHeights[i] / 2);

    fill(secondLineColor);
    stroke(secondLineColor);
    rect(x, height / 2,
         lineWidth, lineHeights[i] / 2);
  }
  noLoop();
}