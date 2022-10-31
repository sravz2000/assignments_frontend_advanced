interface IGps
{
    x:number;
    y:number;
    getCoordinates():void;
}

interface IMediaPlayer
{
    start():void;
    stop():void;
    pause():void;
}

class SmartPhone implements IGps
{
    public x:number = 45.667;
    public y:number = 45.668;
     
    public getCoordinates(): void 
    {
        console.log("Latitude  : "  + this.x);
        console.log("Longitude  : "  + this.y);
    }

    public start():void
    {
        console.log("START");
    }

    public stop():void
    {
        console.log("STOP");
    }

    public pause():void
    {
        console.log("PAUSE");
    }
}

var gpsObj:SmartPhone = new SmartPhone();
gpsObj.getCoordinates(); 

var startObj:SmartPhone = new SmartPhone();
startObj.start(); 

var stopObj:SmartPhone = new SmartPhone();
stopObj.stop(); 

var pauseObj:SmartPhone = new SmartPhone();
pauseObj.pause(); 