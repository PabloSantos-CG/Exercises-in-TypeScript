const planets = []

let situation: "Habitado" | "Habitável" | "Inabitável" | "Inexplorado"
type coordinate = [number, number, number, number]

//Cria um novo planeta
function createPlanet(name: string, coordinate: coordinate, situation: string, satellites: string[]) {
  const newPlanet = {
    name,
    coordinate,
    situation,
    satellites
  }

  planets.push(newPlanet)
}

//Busca por um planeta existente através do seu name e o retorna
function searchPlanet(name: string) {
  return planets.find(value => value.name === name)
}


//Função que busca pelo planeta e se ele existir, chama a função de atualizar a situação
function updateStatus() {
  const name = prompt("Informe o nome do planeta:")
  const planet = searchPlanet(name)
  
  if(!planet) {
    alert("Planeta não existente!\nVoltando para o menu...")
  } else {
    updateSituation(planet)
  }
}

//Atualiza a situação do planeta
function updateSituation(planet) {
  const optionForSituation = prompt(
    `Para atualizar a situação, escolha uma das opções:
    1 - Habitado
    2 - Habitável
    3 - Inabitável
    4 - Inexplorado`
  )  

  switch(optionForSituation) {
    case "1":
      situation = "Habitado"
      planet.situation = situation
      break
    case "2":
      situation = "Habitável"
      planet.situation = situation
      break
    case "3":
      situation = "Inabitável"
      planet.situation = situation
      break
    case "4":
      situation = "Inexplorado"
      planet.situation = situation
      break
    default: 
      alert("Opção inválida!\nVoltando para o menu...")
  }
}  

//Adiciona um satélite ao planeta existente
function addSatellite() {
  const name = prompt("Informe o nome do planeta:")
  const planet = searchPlanet(name)

  if(!planet) {
    alert("Planeta não existente!\nVoltando para o menu...")
  } else {
    const satellite = prompt("Informe o nome do satélite:")
    planets.push(satellite)
    
    alert(`O satélite ${satellite} foi adicionado ao planeta ${planet.name}`)
  }
}

//Função que remove um satélite de um determinado planeta
function removeSatellite() {
  const name = prompt("Informe o nome do planeta:")
  const planet = searchPlanet(name)

  if(!planet) {
    alert("Planeta não existente!\nVoltando para o menu...")
  } else {
    // ....
    
  }
}