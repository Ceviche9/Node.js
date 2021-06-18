require('dotenv').config();

const express = require('express');
const app = express();
//O mongoose modela  e conecta base de dados.
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING , {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        
        console.log('Servidor conectado a base de dados');

        app.emit('Pronto');
    })
    .catch(e => console.log(e));

//Sessions: Servem para identificar o navegador do cliente, salvar um cookie no computador dele e toda vez que ele conectar no servidor um sinal vai ser mandado para a base da dados e conectar automaticamente o cliente.
const session = require('express-session');
//MongoStore: serve para salvar as sessions dentro da base de dados. Por padrão as sessions são salvas na memoria.
const mongoStore = require('connect-mongo');
//Flash: são mensagens auto destrutivas. São usados para mandar mensagens de erros ou avisos ao usuário.
const flash = require('connect-flash');
//Routes: são as rotas da aplicação. ex: /home , /contact, /user...
const routes = require('./routes');
//Path:Trabalha com caminhos 
const path = require('path');
//Helmet: deixa a aplicação mais segura
const helmet = require('helmet');
//Csrf: são tokens que são criados para os formulários dentro da aplicação, protege contra ataques.
const csrf = require('csurf');
//MiddleWare: são funções que são executadas nas rotas ou no meio das rotas.
const Middleware = require('./src/middleWares/middleware');

app.use(helmet());
//Aqui permite que usuários postem formulários para dentro da aplicação.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Todos os arquivos estáticos que podem ser acessados diretamente. ex: css, img, bundle...
app.use(express.static(path.resolve(__dirname, 'public')));
//Configurações de sessão->
const sessionOptions = session({

    secret: 'hdskjfsdf skf dsfj jf sdf',
    store: mongoStore.create({mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {

        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true

    }

});

app.use(sessionOptions);
app.use(flash());

//Views são os arquivos que são renderizados na tela. ex: html ou ejs.
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());

//Meus middleWares
app.use(Middleware.middlewareGlobal);
app.use(Middleware.checkCsrfError);
app.use(Middleware.token);
app.use(routes);

//Após o mongoose conectar com a base de dados->
app.on('Pronto', () => {app.listen(3000, () => {

    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
})
});

