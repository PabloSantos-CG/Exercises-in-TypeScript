const libraryOfShips = []

//1ª função, irá criar uma nave
function createSpaceShip(name: string, pilot: string, crewLimit: number) {
  const spaceShip = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false
  }

  libraryOfShips.push(spaceShip)
  alert(`Nave ${spaceShip.name} criada com sucesso!`)
}

//Esta função busca pela name e então retorna ela se ela existir
function searchSpaceShip(name: string) {
  let spaceShip: {
    name: string
    pilot: string
    crewLimit: number
    crew: string[]
    inMission: boolean
  }

  spaceShip = libraryOfShips.find(value => value.name === name)
  return spaceShip
}

//2ª função, irá adicionar um membro em uma nave
function addMemberInSpaceShip( spaceShip: { name: string, pilot: string, crewLimit: number, crew: string[] }, newMember: string) {
  if(spaceShip.crew.length < spaceShip.crewLimit) {
    spaceShip.crew.push(` ${newMember} `)
    alert(`${newMember} adicionado(a) com sucesso!`)
    
  } else {
    alert(`Falha ao adicionar!\nO limite da nave é ${spaceShip.crewLimit}`)
  }
}

//3ª função, irá enviar a nave em uma missão
function sendToMission(spaceShip: { name: string, pilot: string, crewLimit: number, crew: string[], inMission: boolean }) {

  if (spaceShip.inMission) {
    alert(`${spaceShip.name} não pode ser enviada. Nave já em missão.`)
  } else if (spaceShip.crew.length < Math.floor(spaceShip.crewLimit / 3)) {
    alert(`${spaceShip.name} não pode ser enviada. Tripulação insuficiente.`)
  } else {
    spaceShip.inMission = true
    alert(`${spaceShip.name} enviada para a missão!`)
  }

}

//4ª função, irá enviar a nave em uma missão
function showSpaceShips() {
  let dataShips = ""

  libraryOfShips.forEach(value => {
    dataShips += `
    Nave: ${value.name}
    Piloto: ${value.pilot}
    Tripulação: ${value.crew}
    Tripulação suportada: ${value.crewLimit}
    Nave em missão: ${value.inMission ? 'Sim' : 'Não'}
    \n\n
    `
  })
  
  alert(dataShips)
  console.log(dataShips)
}

//funções do menu

//primeira opção
function firstMenuOption() {
  const name = prompt('Qual é o nome da nave a ser registrada?')
  const pilot = prompt(`Qual é o nome do piloto da ${name}`)
  const crewLimit = parseInt(prompt(`Quantos tripulantes a ${name} suporta?`))

  const confirmation = confirm(`Confirmar o registro da nave ${name}?\nPiloto: ${pilot}\nTamanho da Tripulação: ${crewLimit}`)

  if (confirmation) {
    createSpaceShip(name, pilot, crewLimit)
  }
}

//segunda opção
function secondMenuOption() {
  const name = prompt("Nome do novo membro:")
  const designated = prompt(`Para qual nave deseja designar o tripulante ${name} ?`)

  const spaceShip = searchSpaceShip(name)

  if(spaceShip) {
    const confirmation = confirm(`Confirmar o registro de ${name} na nave ${designated} ?`)

    if(confirmation) {
      addMemberInSpaceShip(spaceShip, name)
    } else {
      alert("Voltando para o menu inicial...")
    }

  } else {
    alert(`A nave ${designated} não foi encontrada!`)
  }

}

//terceira opção
function thirdMenuOption() {
  const name = prompt("Qual o nome da nave que deseja enviar?")

  const spaceShip = searchSpaceShip(name)

  if(spaceShip) sendToMission(spaceShip)
  else alert(`A nave ${name} não foi encontrada!`)
}

function execute() {
  let options = ""
  
  do {
    options = prompt(`
    Seja Bem-Vindo(a)!

    Total de naves registradas até o momento: ${libraryOfShips.length}

    Escolha uma das opções abaixo:
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
    `)

    switch(options) {
      case "1":
        firstMenuOption()
        break
      case "2":
        secondMenuOption()
        break
      case "3":
        thirdMenuOption()
        break
      case "4":
        showSpaceShips()
        break
      case "5":
        alert("Encerrando...")
        break
  
      default:
        alert("Opção inválida!")
    }
  
  } while(options !== "5")
}

document.addEventListener("DOMContentLoaded", execute)