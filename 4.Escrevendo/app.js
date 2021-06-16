const path = require('path');
const filePath = path.resolve(__dirname,'Teste.json');
//para escrever em um arquivo
const write = require('./module/escrever');
//para ler algum arquivo
const read = require('./module/ler');

//Para escrever em um arquivo

//const Pessoas = [
//
//    {Nome: 'João'},
//    {Nome: 'Tundê'},
//    {Nome: 'Dudu'},
//    {Nome: 'Nathan'},
//    {Nome: 'Levi'},
//
//];
//const json  = JSON.stringify(Pessoas, '', 2);
//write(filePath, json);

async function readFile(filePath) {

   const dados = await read(filePath);
   renderiza(dados);

}

function renderiza(dados){

    dados = JSON.parse(dados);
    
    for(let pessoa of dados) {

        console.log(pessoa)
    }

}

readFile(filePath);