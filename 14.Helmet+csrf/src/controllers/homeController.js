exports.homePage = (req, res) => { 

    res.render('index', {
        title: 'Este será o título',
    });
    return;
};

exports.homePost = (req, res, next) => {

    res.send('Sou sua nova rota de post');
    return;


};