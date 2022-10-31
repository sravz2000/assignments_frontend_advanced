var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
        this.x = 45.667;
        this.y = 45.668;
    }
    SmartPhone.prototype.getCoordinates = function () {
        console.log("Latitude  : " + this.x);
        console.log("Longitude  : " + this.y);
    };
    SmartPhone.prototype.start = function () {
        console.log("START");
    };
    SmartPhone.prototype.stop = function () {
        console.log("STOP");
    };
    SmartPhone.prototype.pause = function () {
        console.log("PAUSE");
    };
    return SmartPhone;
}());
var gpsObj = new SmartPhone();
gpsObj.getCoordinates();
var startObj = new SmartPhone();
startObj.start();
var stopObj = new SmartPhone();
stopObj.stop();
var pauseObj = new SmartPhone();
pauseObj.pause();
