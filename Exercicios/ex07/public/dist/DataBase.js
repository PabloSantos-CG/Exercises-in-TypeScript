import { AddRemoveSattelites } from "./modules/AddRemoveSattelites.js";
import { CaptureName } from "./modules/CaptureName.js";
import { CreatePlanet } from "./modules/CreatePlanet.js";
import { OptionCreatePlanet } from "./modules/OptionCreatePlanet.js";
import { SituationPlanet } from "./modules/SituationPlanet.js";
export class DataBase extends AddRemoveSattelites {
    //Cria um novo planeta
    static newPlanet(name, coordinate, satellites) {
        const newPlanet = new CreatePlanet(name, coordinate, satellites);
        DataBase.planets.push(newPlanet);
        return newPlanet;
    }
    //Método que busca pelo planeta e faz uma verificação
    static searchPlanet(namePlanet) {
        const planet = DataBase.planets.find(value => value.name === namePlanet);
        if (!planet) {
            alert("Planeta inexistente!\nVoltando para o menu...");
            //debug
            console.log(planet);
        }
        return planet;
    }
    //Atualiza o status do planeta
    static updateStatus() {
        const name = CaptureName.namePrompt();
        const planet = DataBase.searchPlanet(name);
        if (typeof planet !== "undefined") {
            SituationPlanet.changeSituation(planet);
        }
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
      Satelites:
        ${listSatellites}`;
        });
        if (DataBase.planets.length === 0)
            alert("Ainda não há planetas registrados.\nExperimente criar um.");
        else
            alert(`Planetas salvos: \n${finalList}`);
    }
    static createPlanet() {
        const name = CaptureName.namePrompt();
        const exist = DataBase.planets.find(value => value.name === name);
        if (exist) {
            alert("Este planeta já existe!\nTente outro.");
        }
        else {
            const { coordinate, satellites } = OptionCreatePlanet.default();
            const newPlanet = DataBase.newPlanet(name, coordinate, satellites);
            SituationPlanet.changeSituation(newPlanet);
        }
        console.log(DataBase.planets);
    }
    static checkDatabase(fn) {
        if (DataBase.planets.length > 0) {
            fn();
        }
        else {
            alert("No momento não há planetas no \"banco de dados\"");
        }
    }
    static executeMenu() {
        let options = "";
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
      `);
            switch (options) {
                case "1":
                    DataBase.createPlanet();
                    break;
                case "2":
                    DataBase.checkDatabase(DataBase.updateStatus);
                    break;
                case "3":
                    DataBase.checkDatabase(DataBase.addSatellite);
                    break;
                case "4":
                    DataBase.checkDatabase(DataBase.removeSatellite);
                    break;
                case "5":
                    DataBase.checkDatabase(DataBase.listPlanets);
                    break;
                case "6":
                    alert("Encerrando...");
                    break;
                default:
                    alert("Opção inválida!");
            }
        } while (options !== "6");
    }
}
DataBase.planets = [];
