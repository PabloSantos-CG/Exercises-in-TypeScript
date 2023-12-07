class SpaceShip {
    constructor(naveName, pilot, inMission = "NÃO") {
        this.naveName = naveName;
        this.pilot = pilot;
        this.inMission = inMission;
        this.speedCurrent = 0;
    }
    accelerateShip(value) {
        this.speedCurrent += value;
    }
    sendToMission() {
        this.inMission = "SIM";
    }
}
const nave = new SpaceShip("Death Star", "Han Solo");
nave.accelerateShip(2500);
nave.sendToMission();
console.log(nave);
