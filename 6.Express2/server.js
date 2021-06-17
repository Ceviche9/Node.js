const express = require('express');
const app = express();

//Operações de uma API
//GRUD ->  Create, Read, Update, Delete
//          POST   GET     PUT   DELETE 

//https://meusite.com/ <- Get -> entregue a página
//https://meusite.com/sobre <- Get -> entregue a página /sobre
//https://meusite.com/contato <- Get -> entregue a página /contato


app.get('/', (req, res) => {

    res.send('Olá mundo!');

}); 

app.get('/contato', (req, res) => {

    res.send('Obrigando por entrar em contato');
});

app.listen(3000, () => {

    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});