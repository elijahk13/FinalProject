  var wavecolor = (255);
  var txtcolor = (0);
  var bg = 0;
function preload(){
  sound = loadSound("assets/tellmewhen.mp3");
  //gcw = loadImage("assets/warriors.png")
  oak = loadImage("assets/raiders.png")
}

function setup(){

  var cnv = createCanvas(500,500);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
}

function draw(){
  bg = oak;
  background(bg);

  var waveform = fft.waveform();
  noStroke();
  noFill();
  beginShape();
  stroke(wavecolor); 
  strokeWeight(3);
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();

  stroke(txtcolor);
  strokeWeight(1);
  text('TELL ME WHEN TO GO', 4, 10);
}

//function keyPressed() {
  if (wavecolor === 255) {
    wavecolor = (0,0,255);
    txtcolor = (255,255,0)
     bg = gcw;
  }else{
    wavecolor = 0;
    txtcolor = (255,255,0)
     bg = oak;
  }

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}

