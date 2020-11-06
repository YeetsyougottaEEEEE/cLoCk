var h;
var m;
var s;
var scangl, mmangl, hrangl;
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  

}

function draw() {
  background(0,0,0);

  translate(200,200);

  s=second();
  h=hour();
  m=minute();

  var sArc = map(s,0,60,0,360);
  noFill();
  stroke(255,0,0);
  strokeWeight(8);
  arc(0,0,300,300,0,sArc);

  var mArc = map(m,0,60,0,360);
  noFill();
  stroke(0,255,0);
  strokeWeight(8);
  arc(0,0,280,280,0,mArc);

  var hArc = map(h%12,0,12,-90,360);
  noFill();
  stroke(0,0,255);
  strokeWeight(8);
  arc(0,0,260,260,0,hArc);

  push();
  rotate(sArc);
  stroke(255,0,0);
  strokeWeight(8);
  line(0,0,100,0);
  pop();

  push();
  rotate(mArc);
  stroke(0,255,0)
  strokeWeight(8);
  line(0,0,75,0);
  pop();

  push();
  rotate(hArc);
  stroke(0,0,255);
  strokeWeight(8);
  line(0,0,50,0);
}