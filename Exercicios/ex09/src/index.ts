class CreatePerson {
  public vehicule: object[] | "Menor de idade"

  constructor(
    public name:string, 
    public age:number, 
    private _job:"SIM" | "NÃO",
    ) {
  }

  verification() {
    if(this.age > 18 && this._job === "SIM") {
      this.addCar
    }
  }

  addCar(name:string, brand:string, year:number) {
    if(this.age > 18 && this._job === "SIM") {
      this.vehicule = []
      this.vehicule.push({ name, brand, year })

    } else {
      this.vehicule = "Menor de idade"
      console.log("Não será possível realizar a aquisição de um carro :(")
      console.log(this)
    }
  }
}


const fulano = new CreatePerson("Guio", 26, "SIM")
console.log({ fulano })
