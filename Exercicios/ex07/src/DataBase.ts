import { AddRemoveSattelites } from "./modules/AddRemoveSattelites"
import { CaptureName } from "./modules/CaptureName"
import { CreatePlanet } from "./modules/CreatePlanet"
import { Planet } from "./modules/Interfaces"
import { OptionCreatePlanet } from "./modules/OptionCreatePlanet"
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

    return newPlanet
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

  static createPlanet() {
    const name = CaptureName.namePrompt()
    const exist = DataBase.planets.find(value => value.name === name)

    if(exist) {
      alert("Este planeta já existe!\nTente outro.")
    } else {
      const { coordinate, satellites } = OptionCreatePlanet.default()
      const newPlanet = DataBase.newPlanet(name, coordinate, satellites)

      SituationPlanet.changeSituation(newPlanet)
    } 
  }

  static executeMenu() {
    let options = ""
  
    do {
      options = prompt(`
      Seja Bem-Vindo(a)
      Total de planetas registrados: ${DataBase.planets.length}

      Escolha o número da opção desejada:
      1 - Criar planeta
      2 - Atualizar a situação do planeta
      3 - Adicionar satélite ao planeta
      4 - Remover satélite do planeta
      5 - Listar planetas
      6 - Encerrar
      `)

      switch(options) {
        case "1":
          DataBase.createPlanet()
          break
        case "2":
          DataBase.updateStatus()
          break
        case "3":
          DataBase.addSatellite()
          break
        case "4":
          DataBase.removeSatellite()
          break
        case "5":
          DataBase.listPlanets()
          break
        case "6":
          alert("Encerrando...")
          break
        default:
          alert("Opção inválida!")
      }
      console.log(DataBase.planets)
      
    } while(options !== "6")

    
  }
}
