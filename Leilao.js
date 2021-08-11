const Lance = require("./Lance");

module.exports = class Leilao {
    constructor(desc) {
        this.descricao = desc;
        this.lances = [];
        this.maiorLance = new Lance('Ninguem', 0);
        this.menorLance = new Lance('Ninguem', Number.MAX_VALUE);
    }
    getDescricao() {
        return this.descricao;
    }
    getLances() {
        return this.lances;
    }
    getMaiorLance() {
        return this.maiorLance;
    }
    getMenorLance() {
        return this.menorLance;
    }
    propoe(lance) {
        this.lances.push(lance);
    }
    avalia() {
        this.lances.forEach(
            (lance) => {
                if (lance.getValor() > this.maiorLance.getValor()) {
                    this.maiorLance = lance;
                }
                if (lance.getValor() < this.menorLance.getValor()) {
                    this.menorLance = lance;
                }
            }
        );
    }
}