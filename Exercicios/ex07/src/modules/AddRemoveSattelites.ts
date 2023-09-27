import { DataBase } from "../DataBase"
import { CaptureName } from "./CaptureName"
import { Planet } from "./Interfaces"

export class AddRemoveSattelites {
  protected name: string
  protected planet: Planet

  //Adiciona um satélite se, ele não existir
  static addSatellite() {
    const name = CaptureName.namePrompt()
    const planet = DataBase.searchPlanet(name)

    if(typeof planet !== "undefined") {
      const newSatellite = prompt("Informe o nome do satélite:")
  
      //Verifica se o satélite ja está incluso
      if(planet.satellites.includes(newSatellite)) {
        alert(`O satélite ${newSatellite} já existe no planeta ${planet.name}`)
      } else {
        planet.satellites.push(newSatellite)
        alert(`O satélite ${newSatellite} foi adicionado ao planeta ${planet.name}`)
      }
    }
  }

  //Remove um satélite se, ele existir
  static removeSatellite() {
    const name = CaptureName.namePrompt()
    const planet = DataBase.searchPlanet(name)
    const satellite = prompt("Informe o nome do satelite que deseja remover:")

    const indexSatellite = planet.satellites.findIndex(value => value === satellite)

    if(indexSatellite !== -1) {
      planet.satellites.splice(indexSatellite, 1)
      alert(`Satelite ${satellite} removido com sucesso!`) 
    } else {
      alert(`O satelite ${satellite} não foi encontrado no planeta ${planet}.`)
    }
  }
}