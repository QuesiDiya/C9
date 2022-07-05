//declaring global variables
var box;

//to create things(runs only once)
function setup() {
  //to create the output screen
  createCanvas(400,400);

  //creating a box sprite and giving it color
  box = createSprite(100,100,25,25);
  box.shapeColor = "pink";
}

//to do things continiously
function draw() 
{
  //to clear the screen and give it colour
  background(30);

  //moving the box in all directions with the arrow keys
  if(keyDown("left")){
    box.x -= 10;
  }

  if(keyDown("right")){
    box.x += 10;
  }

  if(keyDown("up")){
    box.y -=10;
  }

  if(keyDown("down")){
    box.y += 10;
  }
  //to display the sprites on screen
  drawSprites();

}


//sketch.js = file where you work
//p5 are the helper libraries
//html = first file to load, all the files should be mentioned here. Hyper Text Markup Language
//CSS= Cascading Style Sheets, styling part of the code


