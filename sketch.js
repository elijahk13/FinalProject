function preload() {
  sound = loadSound('tellmewhen.mp3');
}

function setup() {
  var cnv = createCanvas(500, 500);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.8);
}

function draw() {
  background(200);

  var spectrum = fft.analyze();
  noStroke();
  fill(0, 0, 122);
  for (var i = 0; i < spectrum.length; i++) {
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h)
  }

  var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255, 255, 0); // waveform is red
  strokeWeight(1);
  for (var i = 0; i < waveform.length; i++) {
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y);
  }
  endShape();

  stroke(0, 0, 255);
  text('TELL ME WHEN TO GO', 4, 10);
  
}

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}