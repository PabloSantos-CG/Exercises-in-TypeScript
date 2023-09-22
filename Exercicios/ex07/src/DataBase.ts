import { AddRemoveSattelites } from "./modules/AddRemoveSattelites"
import { CaptureName } from "./modules/CaptureName"
import { CreatePlanet } from "./modules/CreatePlanet"
import { Planet } from "./modules/Interfaces"
import { SituationPlanet } from "./modules/SituationPlanet"

export class DataBase extends AddRemoveSattelites{
  private static planets = []

  //Cria um novo planeta
  static newPlanet(
    name: string,
    coordinate: Array<number>,
    satellites?: Array<string>
    ) {
    
    const newPlanet = new CreatePlanet(name, coordinate, satellites = undefined)
    DataBase.planets.push(newPlanet)

    console.log(newPlanet)
  }

  //Método que busca pelo planeta e faz uma verificação
  static searchPlanet(namePlanet: string): Planet {
    const planet: Planet | undefined = DataBase.planets.find(value => value.name === namePlanet)
    if(!planet) alert("Planeta inexistente!\nVoltando para o menu...")
    
    return planet
  }

  //Atualiza o status do planeta
  static updateStatus() {
    const name = CaptureName.namePrompt()
    const planet = DataBase.searchPlanet(name)

    SituationPlanet.changeSituation(planet)
  }

  static listPlanets() {
    let finalList = ""
    let listSatellites = ""

    DataBase.planets.forEach(value => {

      value.satellites.forEach(valuePropertie => {
        listSatellites += `${valuePropertie}\n`
      })
    
      finalList += `
      Planeta: ${value.name}
      Coordenadas: ${value.coordinate}
      Situação: ${value.situation}
      Satelites: \n${listSatellites}
      `
    })

    if(DataBase.planets.length === 0) alert("Ainda não há planetas registrados.\nExperimente criar um.")
    else alert(`Planetas salvos: \n${finalList}`)
  }

}

