function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  
  rockMan();
  
}

function rockMan(){
  if(mouseIsPressed){
    tBadge();
  
  } else{ 
    
  
   push(); 
  
  fill (165, 105, 189) // BP
  ellipse (110,90,200, 150);
  
  fill('White')
  ellipse(110,60, 55, 55);
  
  fill ("orange")
  ellipse(110,60, 30, 30);
  pop();
  }
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

function tBadge(){
  push();
  ellipse(512,140,250)
  tFace(44, 68,117,400,50);
  pop();
  
}
