//O file system pode ser usado para ler arquivos, criar , atualizar, desinstalar ou renomear arquivos.

//Usando Promises para simular algo que demora 
const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {

    rootDir = rootDir || path.resolve(__dirname);

    const files = await fs.readdir(rootDir);

    //Criando uma função para caminhar pelos arquivos->
    walk(files); 

}

function walk(files) {

    for (let file of files){

        console.log(file);

    }

}

readdir('C:/Users/ayotu/OneDrive/Área de Trabalho/VScode/Udemy/CursodeJavaScript');