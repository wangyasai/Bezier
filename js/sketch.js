var SVG;
var myCanvas;
var r;
var x1,y1,x2,y2,x3,y3,x4,y4,sx,sy;


function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  background(255);
  if(width > height){
    r = width;
  }else{
    r = height;
  }
}


function draw() {
  speedline(options.Radius);
  frameRate(0.00001);
  if (options.SaveSVG == true) {
    noLoop();
    save();
  }
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


function speedline(r){
  if(options.SavePNG == true){
    clear();
  }else{
    background(options.Background);//
  }


  for(var i = 180;i<540;i+= 360/options.Counts){
    push();
    translate(width/2,height/2);
    noFill();

    if(options.Style == 'style1'){    
      beginShape();
      vertex(options.CenterX,options.CenterY);
      x3 = sin(radians(i))*r+random(options.Offset);
      y3 = cos(radians(i))*r+random(options.Offset);
      x1 = x3/2 +x3/200;
      x2 = x3-x3/20;
      y1 = (-r/7+y3)/2-i/100;
      y2 = y1;
      stroke(options.Color[0],options.Color[1],options.Color[2],100);
      bezierVertex(x1,y1,x2,y2,x3,y3);
      endShape();

      fill(options.Color);
      noStroke();
      ellipse(x3,y3,5,5);
    }


    if(options.Style == 'style7'){   

      x3 = sin(radians(i))*r+random(options.Offset);
      y3 = cos(radians(i))*r+random(options.Offset);

      if( i < 220){
       sx = map(i, 180, 220, 0, -r/10);
       sy = map(i, 180, 220, 0, -r/300);
       x1 = x3*0.5;
       y1 = options.CenterY-(r+options.CenterY)/3;
       x2 = x3*0.8;
       y2 = y3+sy;
     }
     else if( i >220 && i <250){
      sx = map(i, 220, 250, -r/10, -r/2);
      sy = map(i, 220, 250, -r/30, -r/20);
      x1 = sx;
      y1 = options.CenterY;
      x2 = x3-sx*0.2;
      y2 = y3-30;
    }

    else if( i >250 && i <360){
      sx = map(i, 250, 360, -r/1.2, 0);
      sy = map(i, 250, 360, 10,60);
      x1 = sx;
      y1 = options.CenterY+ sy;
      x2 = x3+sx/15;
      y2 = y3*0.9;
    }


    else if(i>360 && i<470){
     sx = map(i, 360, 470, 0, r/1.2);
     sy = map(i, 360, 470, r/4,r/30);
     x1 = sx;
     y1 = options.CenterY+sy;
     x2 = x3+sx/15;
     y2 = y3*0.7;
   }


   else if(i >470 && i <500 ){
    sx = map(i, 470, 500, r/6, r/10);
    sy = map(i, 470, 500, -r/30, -r/10);
    x1 = sx;
    y1 = options.CenterY;
    x2 = x3+sx*0.2;
    y2 = y3-30;
  }

  else if(i>500){
    sx = map(i, 180, 220, r/10, r/30);
    sy = map(i, 180, 220,0, -r/300);
    x1 = x3*0.5;
    y1 = options.CenterY-(r+options.CenterY)/3;
    x2 = x3*0.8;
    y2 = y3+sy;
  }

   noFill();
  beginShape();
  vertex(options.CenterX,options.CenterY);
  stroke(options.Color[0],options.Color[1],options.Color[2],100);

  bezierVertex(x1,y1,x2,y2,x3,y3);
  endShape();

  

  fill(options.Color);
  noStroke();
  ellipse(x3,y3,5,5);
  } 



  else if(options.Style == 'style2'){
    x1 = sin(radians(0))*r+random(options.Offset);
    y1 = cos(radians(0))*r+random(options.Offset);

    x4 = sin(radians(360/options.Counts*30))*r+random(options.Offset);
    y4 = cos(radians(360/options.Counts*30))*r+random(options.Offset);

    x2 = (x1+x4)/2 + options.Angle;
    y2 = (x2+x4)/2 + options.Angle;

    rotate(i);

    x3 = x2;
    y3 = y2;
    beginShape();
    noFill();
    stroke(options.Color[0],options.Color[1],options.Color[2],100);
    vertex(x1,y1);
    bezierVertex(x2,y2,x3,y3,x4,y4);
    endShape();
    fill(options.Color);
    noStroke();
    ellipse(x1,y1,5,5);
    ellipse(x4,y4,5,5);
  } 


  else if(options.Style== 'style3'){
    x1 = sin(radians(0))*r+random(options.Offset);
    y1 = cos(radians(0))*r+random(options.Offset);

    x4 = sin(radians(0))*r/3+random(options.Offset);
    y4 = cos(radians(0))*r/3+random(options.Offset);

    x2 = (x1+x4)/2+random(options.Angle/2,options.Angle);
    y2 = (y1+y4)/2;

    rotate(i);
    x3 = x2;
    y3 = y2;
    beginShape();
    noFill();
    stroke(options.Color[0],options.Color[1],options.Color[2],100);
    vertex(x1,y1);
    bezierVertex(x2,y2,x3,y3,x4,y4);
    endShape();
    fill(options.Color);
    noStroke();
    ellipse(x1,y1,5,5);
    ellipse(x4,y4,5,5);
  } 

  else if(options.Style== 'style4'){
    x1 = sin(radians(0))*r+random(options.Offset);
    y1 = cos(radians(0))*r+random(options.Offset);
    rotate(i);

    noFill();
    stroke(options.Color[0],options.Color[1],options.Color[2],100);
    ellipse(100+random(options.Offset),100+random(options.Offset),options.Radius,options.Radius);
    fill(options.Color);
    noStroke();
    ellipse(x1,y1,5,5);
  } 
  else if(options.Style== 'style5'){
    x1 = sin(radians(0))*r+random(options.Offset);
    y1 = cos(radians(0))*r+random(options.Offset);

    x2 = 100+random(options.Offset);
    y2 = 100+random(options.Offset);
    rotate(i);

    noFill();
    stroke(options.Color[0],options.Color[1],options.Color[2],100);
    arc(x2, y2 ,options.Radius,options.Radius,radians(40),radians(220));
    fill(options.Color);
    noStroke();
    ellipse(x1,y1,5,5);
    ellipse(x2-100,y2-100,5,5);
  } 
  else if(options.Style== 'style6'){
    x1 = sin(radians(0))*random(r*0.8,r)+random(options.Offset);
    y1 = cos(radians(0))*random(r*0.8,r)+random(options.Offset);


    x2 = sin(radians(0))*random(r*0.3,r*0.5)+random(options.Offset);
    y2 = cos(radians(0))*random(r*0.3,r*0.5)+random(options.Offset);

    rotate(i);
    noFill();
    stroke(options.Color[0],options.Color[1],options.Color[2],100);

    line(x1,y1,x2,y2);
    fill(options.Color);

    noStroke();
    var radius= random(3,10);
    ellipse(x1,y1,radius,radius);
    ellipse(x2,y2,radius,radius);
  } 
  pop();
}
}



