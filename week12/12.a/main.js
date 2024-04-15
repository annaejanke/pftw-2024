// The midi notes of a scale
var notes = [ 60, 62, 64, 65, 67, 69, 71];
var osc;

function setup() {
  createCanvas(800, 400);
  osc = new p5.TriOsc();
  osc.start();
  osc.amp(0);
}

function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  osc.fade(0.5,0.2);

  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}

function draw() {

  var w = width / notes.length;
  for (var i = 0; i < notes.length; i++) {
    var x = i * w;

    if (mouseX > x && mouseX < x + w && mouseY < height) {
      if (mouseIsPressed) {
        fill(200, 100, 255);

      } else {
        fill(220, 220, 220);
      }
    } else {
      fill(255, 255, 255);
    }

    rect(x, 0, w-1, height-1);
  }

}

function mousePressed() {
    osc.start();
  var key = floor(map(mouseX, 0, width, 0, notes.length));
  playNote(notes[key]);
}

function mouseReleased() {
  osc.fade(0,0.5);
}