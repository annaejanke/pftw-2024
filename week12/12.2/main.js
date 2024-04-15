let sample
let amp
let vol

function preload(){
  sample = loadSound("edm.mp3")
}


function setup() {
  createCanvas(800, 800);
  amp = new p5.Amplitude()
  sample.playMode('restart')
//   willow.play()
}

function draw() {
  background('#A7C7E7');
  vol = amp.getLevel()
  for(i = 0; i < 800; i+= 12){
    for(j = 0; j < 800; j+= 12){
      fill(vol*500,i,vol*2000)
     ellipse(i+random(vol*50),j+random(vol*50),10) 
    }
  }
}

function mouseClicked() {
    sample.play();
  }










