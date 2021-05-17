var dog, happyDog;
var database;
var foodS, foodStock; 

function preload()
{
	dogImg = loadImage( "images/dogImg.png"); 
  happyDogImg= loadImage("images/dogImg1.png");
  
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(200,200);
  dog.addImage(dogImg);
  dog.scale = 0.2; 
  database = firebase.database();
  var foodStock = database.ref('Food');
        foodStock.on("value", readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  drawSprites();
  text("foodStock", 130,100);
  fill("red");
  

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}


