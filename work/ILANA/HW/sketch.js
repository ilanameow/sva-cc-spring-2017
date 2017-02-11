
var leave=true;
var mySize=50
var gri=10

function setup () {
  createCanvas(windowWidth, windowHeight);
  mySize=50
 

}

function draw() {


if(leave){
		backgroundColor=20;
	} else 
		backgroundColor=100;



ellipse(mouseX-10,mouseY-10,mySize,mySize)


}

function mouseClicked(){
	if (mouseX < windowWidth/2, mouseY < windowHeight/2)
		fill(100,20,10)
	if (mouseX > windowWith/2, mouseY > windowHeight/2)
		fill(20,100,20) 
}
