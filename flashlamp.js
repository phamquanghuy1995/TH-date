class Flashlamp {
    battery

    constructor(battery) {
        this.battery = battery;
    }
    getBatteryInfo(){
        return this.battery.getenergy();
    }
    setBattery(){
        this.battery;
    }
    light(){
        if (this.status){
            alert("lighting");
        }else {
            alert("Not lighting");
        }
    }
    turOn(){
        return this.status = true;
    }
    turOff(){
        return this.status=false;
    }
}