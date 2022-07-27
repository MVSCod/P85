canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencarWidth = 100;
greencarHeight = 90;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencarX = 10;
greencarY = 10;

function add() {
	backgroundImgTag = new Image(); 
	backgroundImgTag.onload = uploadBackground; 
	backgroundImgTag.src = backgroundImage; 

	greencarImgTag = new Image();
	greencarImgTag.onload = uploadgreencar; 
	greencarImgTag.src = greencarImage;  
}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadGreencar() {
	ctx.drawImage(greencarImgTag, greencarX, greencarY, greencarWidth, greencarHeight);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
}
function up()
{
	if(greencarY >=0)
	{
		greencarY = greencarY - 10;
		console.log("Quando direcional cima for pressionada,  x = " + greencarX + " | y = " +greencarY);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(greencarY <=500)
	{
		greencarY =greencarY+ 10;
		console.log("Quando direcional baixo for pressionada,  x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(greencarX >= 0)
	{
		greencarX =greencarX - 10;
		console.log("Quando direcional esquerda for pressionada,  x = " +greencarX + " | y = " +greencarY);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(greencarX <= 700)
	{
		greencarX =greencarX + 10;
		console.log("Quando direcional direita for pressionada,  x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadrover();
   }
}