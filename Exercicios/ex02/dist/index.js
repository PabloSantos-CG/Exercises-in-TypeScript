var SilverShip = /** @class */ (function () {
    function SilverShip() {
        this.currentSpeed = 20;
    }
    SilverShip.prototype.setAttributes = function () {
        this.shipName = prompt("Hi Sir! \nNos informe o nome da nave:");
        this.CaptainName = prompt("Agora informe seu nome:");
    };
    SilverShip.prototype.showNave = function () {
        alert("\n      A nave ".concat(this.shipName || "CONFIDENCIAL", " \nFoi enviada numa miss\u00E3o pelo capit\u00E3o \"").concat(this.CaptainName || "CONFIDENCIAL", "\"...\n    "));
        this.accelerateShip();
    };
    SilverShip.prototype.accelerateShip = function () {
        var confirmation = confirm("Capit\u00E3o \"".concat(this.CaptainName, "\", deseja aumentar a velociade da nave?"));
        if (confirmation) {
            alert("Yes Sir! \nLet's Go!");
            var value = +prompt("Em quanto deseja aumentar a velocidade?");
            if (this.currentSpeed > value && value > 0) {
                alert("Reduzindo a velocidade de: \"".concat(this.currentSpeed, "\" para: ").concat(value, "..."));
                this.currentSpeed -= value;
            }
            else if (this.currentSpeed < value) {
                alert("Aumentando a velocidade de: \"".concat(this.currentSpeed, "\" para: ").concat(value, "..."));
                this.currentSpeed += value;
            }
            else {
                alert("Valor inv\u00E1lido! \nMantendo a velocidade da nave em: \"".concat(this.currentSpeed, "\"..."));
            }
        }
        else {
            alert("Yes Sir! \nGood Choice!");
        }
    };
    return SilverShip;
}());
var nave = new SilverShip();
nave.setAttributes();
nave.showNave();
