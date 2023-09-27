import { DataBase } from "../DataBase"

export class OptionCreatePlanet {
  static default() {
    alert("Vamos criar o seu planeta! :) \nSerá necessário:\nNome\nCoordenadas\nSituação do Planeta\nSatelites (Opcional)")

    const coordinate: Array<number> = []
    const satellites: Array<string> = []

    alert("Atenção!\nAs coordenadas devem ser numéricas\nNão insira letras, apenas números!")

    for (let i = 1; i <= 4; i++) {
      const value = parseFloat(prompt(`Insira a ${i}ª coordenada:`))

      if(isNaN(value)) {
        alert("Isto não é um número!")
        i--
      } else {
        coordinate.push(value)
      }
      //debug
      console.log({ coordinate })
    }

    //Satelites
    const confirmSattelites = confirm("Deseja adicionar satélites ?")

    if(confirmSattelites) {
      const repetitions = parseInt(prompt("Quantos satélites deseja adicionar?"))
    
      if(isNaN(repetitions)) {
        alert("Não entendi sua resposta :(")

      } else {
        for (let i = 1; i <= repetitions; i++) {
          const value = prompt(`Insira o ${i}º satélite:`)
          satellites.push(value)
        }
      }
    }

    return { coordinate, satellites }
  }
}