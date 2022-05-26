let busto;
var mic;

function preload() {
  busto = loadModel('BUSTO_15_GU.obj', true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //var cnv = createCanvas(300, 450, WEBGL);
  //debugMode();
  background(0);
  //var x = (windowWidth - width) / 2;
  //var y = (windowHeight - height) / 2;
  //cnv.position(x, y);

  mic = new p5.AudioIn();
  mic.start();

  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(0);

  var vol = mic.getLevel();
  //console.log(vol);

  
  scale(1.5+vol*45);

 
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(250, 0, 0, 0, 100, width/2);
  pointLight(0, 0, 250, -100, -100, height/2);
  pointLight(0, 250, 0, 100, 150, height/2);
  ambientLight(200);
  normalMaterial();
  //(5,5,0.2);
  //rotateX(PI/6);
  //rotateY(-1);
  
  noStroke();
  rotateZ(PI);
  rotateY(HALF_PI);
  model(busto);
  orbitControl(-2,-2,0);

}

function touchStarted() {
  getAudioContext().resume();
}
