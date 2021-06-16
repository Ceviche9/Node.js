//Como importar o modulo
const mod1 = require('./mod1');
mod1.falaNome;

 //Usando destructuring->
const {Pessoa} = require('./mod2');
const p1 = new Pessoa('Tundê');
console.log(p1);

//É possível instalar algo  importar sem chamar o caminho completo
const axios = require('axios');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e=> console.log(e));
