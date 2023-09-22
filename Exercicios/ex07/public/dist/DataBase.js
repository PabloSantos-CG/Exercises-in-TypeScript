import { AddRemoveSattelites } from "./modules/AddRemoveSattelites.js";
import { CaptureName } from "./modules/CaptureName.js";
import { CreatePlanet } from "./modules/CreatePlanet.js";
import { SituationPlanet } from "./modules/SituationPlanet.js";
export class DataBase extends AddRemoveSattelites {
    //Cria um novo planeta
    static newPlanet(name, coordinate, satellites) {
        const newPlanet = new CreatePlanet(name, coordinate, satellites = undefined);
        DataBase.planets.push(newPlanet);
        console.log(newPlanet);
    }
    //Método que busca pelo planeta e faz uma verificação
    static searchPlanet(namePlanet) {
        const planet = DataBase.planets.find(value => value.name === namePlanet);
        if (!planet)
            alert("Planeta inexistente!\nVoltando para o menu...");
        return planet;
    }
    //Atualiza o status do planeta
    static updateStatus() {
        const name = CaptureName.namePrompt();
        const planet = DataBase.searchPlanet(name);
        SituationPlanet.changeSituation(planet);
    }
    static listPlanets() {
        let finalList = "";
        let listSatellites = "";
        DataBase.planets.forEach(value => {
            value.satellites.forEach(valuePropertie => {
                listSatellites += `${valuePropertie}\n`;
            });
            finalList += `
      Planeta: ${value.name}
      Coordenadas: ${value.coordinate}
      Situação: ${value.situation}
      Satelites: \n${listSatellites}
      `;
        });
        if (DataBase.planets.length === 0)
            alert("Ainda não há planetas registrados.\nExperimente criar um.");
        else
            alert(`Planetas salvos: \n${finalList}`);
    }
}
DataBase.planets = [];
