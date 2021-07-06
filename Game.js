class Game {
    constructor(){

    }
    getGameState(){
        var dbRef = database.ref("gameState");
        //on function is a listner function which is  used to read the data
        dbRef.on("value",function(data){

            gameState=data.val();
        });

    }
    updateGameState(stateObj){
        var dbRef = database.ref("/").update(
            {
                gameState:stateObj,
            }

        );
    }
    start(){
        if(gameState===0){
            //to do create form obj
            playerObj = new Player();
            playerObj.getPlayerCount();
            formObj= new Form();
            formObj.displayForm();

        }
        car1 = createSprite(100,200);
        car1.addImage(c1);
        car2 = createSprite(300,200);
        car2.addImage(c2);
        car3 = createSprite(500,200);
        car3.addImage(c3);
        car4 = createSprite(700,200);
        car4.addImage(c4);
        cars = [car1,car2,car3,car4];


    }
    play(){
        formObj.hideElements();
        textSize(30);
        text("GAME START",120,100);
        //get playerInfo is a static function
        Player.getPlayerInfo();
        playerObj.getFinishedCars();
        //console.log(allPlayerInfo);

/*
    player1: {playerDistance: 0, playerName: "enter your name"}
    player2: {playerDistance: 0, playerName: "enter your nam"}
    player3: {playerDistance: 0, playerName: "enter your na"}
    player4: {playerDistance: 0, playerName: "enter your n"}   
*/
        if (allPlayerInfo!==undefined){
            background(ground);
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
            var carIndex = 0;
            var carXPos = 175;
            var carYPos = 0;
            for (var eachPlayer in allPlayerInfo){
                carIndex = carIndex+1;
                carXPos = carXPos+200;
                carYPos = displayHeight-allPlayerInfo[eachPlayer].playerDistance;
                cars[carIndex-1].x=carXPos;
                cars[carIndex-1].y=carYPos;
                if(carIndex===playerObj.playerID){
                    stroke(10);
                    fill("green");
                    ellipse(carXPos,carYPos,100,100);
                  
                    cars[carIndex-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[carIndex-1].y;

                    

                }
            }
            
            drawSprites();
        }
        if (touches.length || keyDown(UP_ARROW)&&playerObj.playerID!==null){
            playerObj.playerDistance=playerObj.playerDistance+10;
            playerObj.updatePlayerInfo();
            console.log(playerObj.playerDistance);
            touches = [];
            
       
        }
        if(playerObj.playerDistance>3800){
            gameState=2;

            playerObj.numberOfCarsFinished=playerObj.numberOfCarsFinished+1
            Player.updateFinishCar(playerObj.numberOfCarsFinished);
            playerObj.updatePlayerRank(playerObj.numberOfCarsFinished);
            
            
            console.log("game is ended "+playerObj.playerName);
        }
    }
    end(){
        gameObj.updateGameState();
        console.log("gameEnded");
    }
    

}
