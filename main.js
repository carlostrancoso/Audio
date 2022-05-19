let busto;
let map;
var mic;

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

  mic = new p5.AudioIn();
  mic.start();
  
}

function draw() {
  //background(0);

  getAudioContext().resume();

  var vol = mic.getLevel();
  console.log(vol);

  rotateZ(PI);
  scale(1.5+vol*30);
 // model(busto);

 
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(250, 0, 0, 0, 100, width/2);
  pointLight(0, 0, 250, -100, -100, height/2);
  pointLight(2500, 250, 250, 150, 150, height/2);
  //normalMaterial();
  texture(map);
  orbitControl(5,5,0.2);
  //rotateX(PI/6);
  //rotateY(-1);
  
  noStroke();

  

  
  

   model(busto);
 
  
  
}
