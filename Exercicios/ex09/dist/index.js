const arr = [
    { id: 1, name: "Guio", power: 50 },
    { id: 2, name: "Pablo", power: 50 },
    { id: 3, name: "Adriele", power: 2 },
    { id: 4, name: "Adriana", power: 3 },
    { id: 5, name: "Junior", power: 15 },
];
const dataBase = arr.map((valorAtual, indexAtual) => {
    if (valorAtual.power === 50) {
        return valorAtual.name;
    }
    else {
        return "Não encontrado";
    }
});
console.log(dataBase);
