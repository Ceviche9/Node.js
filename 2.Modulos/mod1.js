//caso eu queria criar um modulo que exporteuma função ou uma classe >

module.exports = class Cachorro{

    constructor(nome){

        this.nome = nome;
    }

    latir() {

        console.log(`${this.nome} está latindo`);


    }
}
