const margin = 20;

function setup() {
  createCanvas(1200, 600);
  noLoop();
  strokeWeight(2);
}

function draw() {
  background(255);
  stroke(0);

  noFill();

  for (let y = margin*2; y < height - margin * 2; y += 25) {
    drawLine(y);
  }

}

function drawLine(lineY) {
  const range = map(lineY, margin * 2, height - margin * 2, 0, 50);

  let prevX = margin * 2;
  let prevY = lineY;
  const lineSpacing = 5;

  for (let x = prevX + lineSpacing; x <= width - margin * 2; x += lineSpacing) {

    const y = lineY + random(-range, range);
    line(prevX, prevY, x, y);

    prevX = x;
    prevY = y;
  }
}