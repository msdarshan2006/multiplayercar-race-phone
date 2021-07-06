class Form{
constructor(){
    this.title=createElement('h2');
    this.inputBox = createInput('enter your name');
    this.button= createButton('play');
    this.greeting = createElement('h3');
    this.reset = createButton('reset');
}
displayForm(){
  
    this.title.html("car race");
    this.title.position(displayWidth-400,100);
   
    this.inputBox.position(displayWidth/2+150,displayHeight/2);
    this.button.position(displayWidth/2+200,displayHeight/2+50);

    this.button.mousePressed(()=>{
        this.inputBox.hide();
        this.button.hide();
        var playerName = this.inputBox.value();
        this.greeting.html('welcome '+ playerName);
        this.greeting.position(displayWidth/2+150,displayHeight/2);
        playerCount=playerCount+1
        playerObj.updatePlayerCount(playerCount);
        playerObj.playerName=playerName;
        playerObj.playerID = playerCount;
        playerObj.updatePlayerInfo();
        // to do update player count & player information
    });


    this.reset.position(displayWidth-800,150);
    this.reset.mousePressed(()=>{
    playerObj.updatePlayerCount(0);
    playerObj.updatePlayerRank(0);
    Player.updateFinishCar(0);
    
    gameObj.updateGameState(0);
    });

 }
hideElements(){
    this.inputBox.hide();
    this.button.hide();
    this.greeting.hide();
    this.title.hide();

}
    

}