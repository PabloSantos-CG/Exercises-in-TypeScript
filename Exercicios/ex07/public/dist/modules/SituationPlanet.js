//Classe que muda a situação do planeta
export class SituationPlanet {
    static changeSituation(planet) {
        let option = "";
        do {
            option = prompt(`Para a situação do planeta, escolha o número da opção desejada:
        1 - Habitado
        2 - Habitável
        3 - Inabitável
        4 - Inexplorado`);
            switch (option) {
                case "1":
                    planet.situation = "Habitado";
                    break;
                case "2":
                    planet.situation = "Habitável";
                    break;
                case "3":
                    planet.situation = "Inabitável";
                    break;
                case "4":
                    planet.situation = "Inexplorado";
                    break;
                default:
                    alert("Opção inválida!");
                    option = "error";
            }
        } while (option === "error");
    }
}
