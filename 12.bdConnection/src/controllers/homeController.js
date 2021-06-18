exports.homePage = (req, res) => { 

    console.log('Respondendo ao cliente');
    res.render('index');
    return;
};

exports.homePost = (req, res, next) => {

    res.send('Sou sua nova rota de post');
    return;


};