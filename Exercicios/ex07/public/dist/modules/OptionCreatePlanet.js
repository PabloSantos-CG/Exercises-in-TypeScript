export class OptionCreatePlanet {
    static default() {
        alert("Vamos criar o seu planeta! :) \nSerá necessário:\nNome\nCoordenadas\nSituação do Planeta\nSatelites (Opcional)");
        const name = prompt("Informe o nome do planeta que deseja criar:");
        const coordinate = [];
        const satellites = [];
        alert("Atenção!\nAs coordenadas devem ser numéricas\nNão insira letras, apenas números!");
        for (let i = 1; i <= 4; i++) {
            let value = parseFloat(prompt(`Insira a ${i}ª coordenada:`));
            if (isNaN(value)) {
                alert("Isto não é um número!");
            }
            else {
                alert("Isto é um número!");
            }
            // coordinate.push(value)
        }
    }
}
