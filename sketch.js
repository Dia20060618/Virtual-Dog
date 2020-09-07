
var canvas, background;
var dog, happyDog, database, foodS, foodStock

function preload()
{
  
  dogImage=loadImage("sprites/dogImg.png");
  happyDogImage=loadImage("sprites/dogImg1.png");
}

function setup() {
  createCanvas(500,500);

//Create a dog sprite and add the dog image to the dog sprite.

database=firebase.database();
foodStock=database.ref('food');
foodStock.on("value",readStock);
 
  
}


function draw() {  
  background(46, 139, 87);
//Using UP_ARROW write the code to feed the dog.
//This action will feed the dog one milk bottle.
//Deduct the count of food left from the firebase.

if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
drawSprites()
//After drawSprites() write the text to print foodStock from the database.
//Use textSize to increase the size of the text, fill() to set text color and stroke() to outline the text.
//(You can add one more text in draw() to show as an instruction on Canvas)
var title=createElement('h2');
title.html("Use up arrow key to feed the dog");
title.position(130,0);
textSize= 2;
fill (rgb(255,42,156));

function readStock (data){
  foodS=data.val();
}

function writeStock(x){
 
    if (x<=0){
      x=0;
    } else {
      x=x-1;
    } 
    database.ref('/').update({
      food:x 
      })
 
}
  drawSprites();
  //add styles here

}
 



