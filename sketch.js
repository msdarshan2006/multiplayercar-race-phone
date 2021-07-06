var  database;
var gameState = 0;
var playerCount = 0;
var formObj,playerObj,gameObj;
var car1,car2,car3,car4,cars;
var c1,c2,c3,c4,track,ground;
// cars = [car1,car2,car3,car4]
var allPlayerInfo;
var playerRank;

function preload(){
  c1=loadImage("images/car1.png");
  c2=loadImage("images/car2.png");
  c3=loadImage("images/car3.png");
  c4=loadImage("images/car4.png");
  track=loadImage("images/track.jpg");
  ground=loadImage("images/ground.png");


}
function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(displayWidth,displayHeight);
  gameObj=new Game();//new object for class game is created
  gameObj.getGameState();//it will get gamestate 
  gameObj.start();




}

function draw(){

  if(playerCount===4){
    gameObj.updateGameState(1);
  }
if(gameState===1){
  clear();
  gameObj.play();
}
if(gameState===2){
  gameObj.end();
  

}
  
}

