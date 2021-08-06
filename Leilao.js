const Lance = require("./Lance");

module.exports = class Leilao {
    constructor(desc) {
        this.descricao = desc;
        this.lances = [];
        this.maiorLance = new Lance('Ninguem',0);
        this.menorLance = new Lance('Ninguem',0);
    }
    getDescricao() {
        return this.descricao;
    }
    getLances() {
        return this.lances; 
    }
    getMaiorLance(){
        return this.maiorLance;
    }
    getMenorLance(){
        return this.menorLance;
    }
    propoe(lance) {
        this.lances.push(lance);
    }
    avalia() {
        
        this.lances.forEach(

            (lance) => {
                  
                for (let index = 0; index < this.lances.length; index++) {
                    if (this.lances[index] > this.maiorLance) {
                        this.maiorLance = this.lances[index]
                    }
                    if (this.lances[index] < this.menorLance) {
                        this.menorLance = this.lances[index]
                    }
                    
                }          
            }
        );
    }
}