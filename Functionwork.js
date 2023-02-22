function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
 
  tFace(153, 68, 117,255, 204, 78,300,56);
  tFace(44, 68, 117,200,22)
  
 triAngle(87, 204, 78,30,75,58,20,86,90)
  
  elliPse(255, 204, 78,69,250,50,200);
  
}

function tFace(r,g,b,x,y){
  push();
  translate(x,y)
  beginShape();
  fill(r,g,b)
vertex(30,15);
vertex(200,15);
vertex(200, 75);
vertex(30, 75);
endShape(CLOSE);
  
  
   beginShape();
  fill(r,g,b)
  noStroke();
vertex(80, 75);
vertex(150,75);
vertex(150,200);
vertex(80,200);
endShape(CLOSE);
pop();
}

function triAngle(r,g,b,x1,y1,x2,y2,x3,y3){
  push();
  fill(r,g,b);
  triangle(x1,y1,x2,y2,x3,y3);
  pop();
  
}

function elliPse(r,g,b,x,y,w,h){
  push();
  fill(r,g,b);
  ellipse(x,y,w,h);
  pop();
}
