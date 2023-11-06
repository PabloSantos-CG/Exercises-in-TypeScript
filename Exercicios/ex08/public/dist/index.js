class Input {
    static createdInput(type, id) {
        const container = document.querySelector("#container");
        const input = document.createElement("input");
        input.type = type;
        input.id = `Tipo:${type}-${id}`;
        container.appendChild(input);
        alert("Elemento criado :)");
        return input;
    }
    static init() {
        const type = prompt("Vamos criar um input.\nInforme o tipo:");
        const id = +prompt("Informe o id:");
        if (type && id !== null) {
            const result = Input.createdInput(type, id);
            console.log(result);
        }
        else {
            alert("Sorry :( \nUnable to create element\nTry again :)");
        }
    }
}
document.querySelector("#init").addEventListener("click", Input.init);
