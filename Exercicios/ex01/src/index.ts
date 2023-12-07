class SpaceShip {
  public speedCurrent: number = 0;

  constructor(
    public naveName: string,
    public pilot: string,
    public inMission: "SIM" | "NÃO" = "NÃO",
  ) {}

  accelerateShip(value: number) {
    this.speedCurrent += value;
  }

  sendToMission() {
    this.inMission = "SIM";
  }
}

const nave = new SpaceShip("Death Star", "Han Solo");

nave.accelerateShip(2500);
nave.sendToMission()
console.log(nave);