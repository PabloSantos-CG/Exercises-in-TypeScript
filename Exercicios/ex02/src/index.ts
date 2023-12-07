class SilverShip {
  public shipName: string;
  public CaptainName: string;
  public currentSpeed = 20;

  setAttributes() {
    this.shipName = prompt("Hi Sir! \nNos informe o nome da nave:");
    this.CaptainName = prompt("Agora informe seu nome:");
  }

  showNave() {
    alert(`
      A nave ${this.shipName || "CONFIDENCIAL"} \nFoi enviada numa missão pelo capitão "${this.CaptainName || "CONFIDENCIAL"}"...
    `);
    this.accelerateShip();
  }

  accelerateShip() {
    const confirmation = confirm(`Capitão "${this.CaptainName}", deseja aumentar a velociade da nave?`);

    if(confirmation) {
      alert("Yes Sir! \nLet's Go!");
      const value = +prompt("Em quanto deseja aumentar a velocidade?");
  
      if (this.currentSpeed > value && value > 0) {
        alert(`Reduzindo a velocidade de: "${this.currentSpeed}" para: ${value}...`);
        this.currentSpeed -= value;
  
      } else if (this.currentSpeed < value) {
        alert(`Aumentando a velocidade de: "${this.currentSpeed}" para: ${value}...`);
        this.currentSpeed += value;
  
      } else {
        alert(`Valor inválido! \nMantendo a velocidade da nave em: "${this.currentSpeed}"...`);
      }
    } else {
      alert("Yes Sir! \nGood Choice!");
    }
  }
}

const nave = new SilverShip();
nave.setAttributes();
nave.showNave();