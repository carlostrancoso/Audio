let busto;
let map;
var mic;
var easycam;
var myCanvas;

function preload() {
  busto = loadModel('BUSTO_15_GU.obj', true);
  map = loadImage('Busto 15_LO.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //var cnv = createCanvas(300, 450, WEBGL);
  //debugMode();
  background(0);
  //var x = (windowWidth - width) / 2;
  //var y = (windowHeight - height) / 2;
  //cnv.position(x, y);

  easycam = createEasyCam();

  mic = new p5.AudioIn();
  mic.start();

  document.oncontextmenu = function() { return false; }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  easycam.setViewport([0,0,windowWidth, windowHeight]);
}

function draw() {
  //background(0);

  getAudioContext().resume();

  var vol = mic.getLevel();
  console.log(vol);

  
  scale(1.5+vol*45);

 
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(250, 0, 0, 0, 100, width/2);
  pointLight(0, 0, 250, -100, -100, height/2);
  pointLight(0, 250, 0, 100, 150, height/2);
  ambientLight(200);
  //normalMaterial();
  texture(map);
  //(5,5,0.2);
  //rotateX(PI/6);
  //rotateY(-1);
  
  noStroke();
  rotateZ(PI);
  rotateY(HALF_PI);
  model(busto);
  
  
  
}
