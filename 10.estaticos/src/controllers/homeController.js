exports.homePage = (req, res) => { 

    res.render('index');

};

exports.homePost = (req, res) => {

    res.send('Sou sua nova rota de post');


};