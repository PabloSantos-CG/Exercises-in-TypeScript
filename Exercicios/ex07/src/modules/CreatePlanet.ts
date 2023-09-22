//Classe que cria um planeta
export class CreatePlanet {
  situation: "Habitado" | "Habitável" | "Inabitável" | "Inexplorado";

  constructor(
    public name: string,
    public coordinate: Array<number>,
    public satellites?: Array<string>
  ) {
    this.situation;
  }
}



