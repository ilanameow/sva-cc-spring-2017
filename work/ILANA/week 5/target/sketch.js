
var circleSize;



function setup(){
	createCanvas(550,550);
}


function draw(){
	background(110,70,90);
	drawTarget(100,100)
	drawTarget(200,200)
	
	rect(10,10,100,100);
	ellipse(10,100,200,300);
}
	
function drawTarget(x,y){
	circleSize=300;
	var numberOfCircles=10;
	for (var i=0; i < numberOfCircles; i++){
		var segment=i/numberOfCircles
		fill(segment*250);
		circleSize=circleSize - segment*circleSize;
		ellipse(x,y,circleSize,circleSize)
	}
}	
	
		