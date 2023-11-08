class CreatePerson {
    constructor(name, age, _job) {
        this.name = name;
        this.age = age;
        this._job = _job;
    }
    verification() {
        if (this.age > 18 && this._job === "SIM") {
            this.addCar;
        }
    }
    addCar(name, brand, year) {
        if (this.age > 18 && this._job === "SIM") {
            this.vehicule = [];
            this.vehicule.push({ name, brand, year });
        }
        else {
            this.vehicule = "Menor de idade";
            console.log("Não será possível realizar a aquisição de um carro :(");
            console.log(this);
        }
    }
}
const fulano = new CreatePerson("Guio", 26, "SIM");
console.log({ fulano });
