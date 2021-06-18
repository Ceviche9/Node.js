exports.middlewareGlobal = (req, res, next) => {

    console.log('');
    console.log('Passei no middleware');
    console.log('');
    next();

};


exports.checkCsrfError = (err, req, res, next) => {

    if(err && err.code === 'EBADCSRFTOKEN'){

        return res.render('404');

    }

    next();
};

exports.token = (req, res, next) => {

    res.locals.csrf = req.csrfToken();
    next();
}