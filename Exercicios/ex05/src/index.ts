const planets = []

let situation: "Habitado" | "Habitável" | "Inabitável" | "Inexplorado"
//type coordinate = [number, number, number, number]

//Cria um novo planeta
function createPlanet(name: string, coordinate: number[], satellites?: string[]) {
  const newPlanet = {
    name,
    coordinate,
    situation,
    satellites
  }
  console.log(newPlanet)

  planets.push(newPlanet)
  return newPlanet
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
    situationPlanet(planet)
  }
}

//Atualiza a situação do planeta
function situationPlanet(planet) {
  const optionForSituation = prompt(
    `Para a situação do planeta, escolha uma das opções abaixo:
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

//Função que remove um  determinado satélite, de um determinado planeta
function removeSatellite() {
  const name = prompt("Informe o nome do planeta:")
  const planet = searchPlanet(name)

  if(!planet) {
    alert("Planeta não existente!\nVoltando para o menu...")
  } else {

    const satellite = prompt("Informe o nome do satelite que deseja remover:")
    const indexSatellite = planet.satellites.findIndex(value => value === satellite)
    
    if(indexSatellite) {
      planet.satellites.splice(indexSatellite, 1)
      alert(`Satelite ${satellite} removido com sucesso!`)
    } else {
      alert(`O satelite ${satellite} não foi encontrado no planeta ${planet}.`)
    }

  }
}

//Lista todos os planetas e satélites
function listPlanets() {
  let finalList = ""
  let listSatellites = ""
  let cont = 1
  planets.forEach(value => {

    value.satellites.forEach(value => {
      listSatellites += `${cont}º - ${value}\n`
      cont++
    })
  
    finalList += `
    Planeta: ${value.name}
    Coordenadas: ${value.coordinate}
    Situação: ${value.situation}
    Satelites: \n${listSatellites}
    `
  })

  if(planets.length === 0) alert("Ainda não há planetas registrados.\nExperimente criar um.")
  else alert(`Planetas salvos: \n${finalList}`)
}

function menuOptionCreatePlanet() {
  alert("Vamos criar o seu planeta! :) \nSerá necessário:\nNome\nCoordenadas\nSituação do Planeta\nSatelites (Opcional)")

  const name = prompt("Informe o nome do planeta que deseja criar:")
  const coordinate: Array<number> = []
  const satellites: Array<string> = []
  
  
  alert("Atenção!\nAs coordenadas devem ser numéricas\nNão insira letras, apenas números!")
  for (let i = 1; i <= 4; i++) {
    const value = parseFloat(prompt(`Insira a ${i}ª coordenada:`))
    coordinate.push(value)
  }

  const confirmSattelites = confirm("Deseja adicionar satélites ?")

  if(confirmSattelites) {
    const repetitions = parseInt(prompt("Quantos satélites deseja adicionar?"))
    
    for (let i = 1; i <= repetitions; i++) {
      const value = prompt(`Insira o ${i}º satélite:`)
      satellites.push(value)
    }
  }

  const newPlanet = createPlanet(name, coordinate, satellites)

  situationPlanet(newPlanet)
}


function executeMenu() {
  let options = ""
  
  
  do {
    options = prompt(`
    Seja Bem-Vindo(a)
    Total de planetas registrados: ${planets.length}

    Escolha uma das opções abaixo:
    1 - Criar planeta
    2 - Atualizar a situação do planeta
    3 - Adicionar satélite ao planeta
    4 - Remover satélite do planeta
    5 - Listar planetas
    6 - Encerrar
    `)

    switch(options) {
      case "1":
        menuOptionCreatePlanet()
        break
      case "2":
        updateStatus()
        break
      case "3":
        addSatellite()
        break
      case "4":
        removeSatellite()
        break
      case "5":
        listPlanets()
        break
      case "6":
        alert("Encerrando...")
        break
      default:
        alert("Opção inválida!")
    }
    
  } while(options !== "6")
}

document.querySelector("#start").addEventListener("click", executeMenu)
//Melhorias para fazer: 
//1 - fazer uma opção para o usuário não criar coisas repetidas