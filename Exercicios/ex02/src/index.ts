function spaceShip(name: string, captain: string) {
  const ship = {
    name,
    captain,
    speed: 20
  }

  alert(`A nave \"${ship.name || "\"CONFIDENCIAL\""}\" foi enviada numa missão pelo capitão ${ship.captain || "\"CONFIDENCIAL\""}...`)

  return ship
}

function speedUpShip(newSpeed: number, spaceShip: { name:string, speed: number }) {
  if(spaceShip.speed > newSpeed) {
    alert(`Reduzindo a velocidade da \"${spaceShip.name}\" para ${newSpeed}...`)
  } else if(spaceShip.speed < newSpeed) {
    alert(`Aumentando a velocidade da \"${spaceShip.name}\" para ${newSpeed}...`)
  } else {
    alert(`Mantendo a velocidade da \"${spaceShip.name}\"...`)
  }
}

const shipName = prompt("Diga o nome da nave")
const captain = prompt("Diga o nome do capitão")
const ship = spaceShip(shipName, captain)

const currentSpeed = Number(prompt("Diga a velocidade que deseja"))
speedUpShip(currentSpeed, ship)