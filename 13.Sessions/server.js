require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');


mongoose.connect(process.env.CONNECTIONSTRING , {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        
        console.log('Servidor conectado a base de dados');

        app.emit('Pronto');
    })
    .catch(e => console.log(e));


const session = require('express-session');
const mongoStore = require('connect-mongo');
const flash = require('connect-flash');


const routes = require('./routes');
const path = require('path');
const Middleware = require('./src/middleWares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

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


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Meus middleWares
app.use(Middleware);
app.use(routes);

app.on('Pronto', () => {app.listen(3000, () => {

    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
})
});

