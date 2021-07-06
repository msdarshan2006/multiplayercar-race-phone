class Player{
    constructor(){
        this.playerName=null;
        this.playerDistance = 0;
        this.playerID=null;
        this.playerRank=0;
        this.numberOfCarsFinished=0;

    }
    getPlayerCount(){
        var playerCountRef = database.ref("playerCount");
        //on function is a listner function which is  used to read the data
        playerCountRef.on("value",function(data){

         playerCount=data.val();
        });
 
    }
    updatePlayerCount(countObj){
            database.ref("/").update(
            {
                playerCount:countObj,
            }

        );
    }
    updatePlayerInfo(){
        database.ref("players/player"+this.playerID).set({
            playerName:this.playerName,
            playerDistance:this.playerDistance,
            playerRank:this.playerRank,
        });

    }
    static getPlayerInfo(){
        var playerRef = database.ref("players");
        playerRef.on("value", (data)=>{
            allPlayerInfo= data.val();
           });

    }
    getPlayerRank(){
        var playerRankRef = database.ref("players/player"+this.playerID);
        //on function is a listner function which is  used to read the data
        playerRankRef.on("value",function(data){


         playerRank=data.val().playerRank;
        });

 
    }
    async getFinishedCars(){
        var numberOfCarsFinishedRef = await database.ref("numberOfCarsFinished").once("value");
        if (numberOfCarsFinishedRef.exists()){
            this.numberOfCarsFinished=numberOfCarsFinishedRef.val();

        }
        
    }
    static updateFinishCar(countObj){
        database.ref("/").update(
        {
            numberOfCarsFinished:countObj
        }

    );
    
}
updatePlayerRank(playerRankObj){
    var dbref = database.ref("players/player"+this.playerID);
    dbref.update({
        playerRank:playerRankObj,
    });
}
}
