function spaceShip(name, captain) {
    var ship = {
        name: name,
        captain: captain,
        speed: 20
    };
    alert("A nave \"".concat(ship.name || "\"CONFIDENCIAL\"", "\" foi enviada numa miss\u00E3o pelo capit\u00E3o ").concat(ship.captain || "\"CONFIDENCIAL\"", "..."));
    return ship;
}
function speedUpShip(newSpeed, spaceShip) {
    if (spaceShip.speed > newSpeed) {
        alert("Reduzindo a velocidade da \"".concat(spaceShip.name, "\" para ").concat(newSpeed, "..."));
    }
    else if (spaceShip.speed < newSpeed) {
        alert("Aumentando a velocidade da \"".concat(spaceShip.name, "\" para ").concat(newSpeed, "..."));
    }
    else {
        alert("Mantendo a velocidade da \"".concat(spaceShip.name, "\"..."));
    }
}
var shipName = prompt("Diga o nome da nave");
var captain = prompt("Diga o nome do capitão");
var ship = spaceShip(shipName, captain);
var currentSpeed = Number(prompt("Diga a velocidade que deseja"));
speedUpShip(currentSpeed, ship);
