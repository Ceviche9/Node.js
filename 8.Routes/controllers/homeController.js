exports.homePage = (req, res) => { 

    res.send(`<form action="/" method="POST">
    Nome do Cliente: <input tyoe="text" name="nome">
    <button>Enviar</button>
    </form>
    `);

}

exports.homePost = (req, res) => {

    res.send('Sou sua nova rota de post');


};