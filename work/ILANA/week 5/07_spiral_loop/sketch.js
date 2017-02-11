var angle=0;
var circleX=0;
var circleY=0;
var length=10;
var circleSize=100;

function setup(){
	createCanvas(1000,1000)
	colorMode(HSB,255)
}

function draw(){
	background(255,100,200);
	var numberOfCircles=90;
	var twoPI= Math.PI * 2;
	length=10;
	for( var index=0;
	index < numberOfCircles;
	index = index+1) 
	
	{length=length+(index*mouseX*0.01);
	
	
	var segAngle=index/numberOfCircles;
	var angle=segAngle*(twoPI*mouseX/2);
	fill(segAngle*200,150,300);
	stroke(segAngle*200,100,350);

	circleX=Math.cos(angle)*length+width/2;
	circleY=Math.sin(angle)*length+height/2;
		
		ellipse(circleX,circleY,circleSize,circleSize);
		
}
}












