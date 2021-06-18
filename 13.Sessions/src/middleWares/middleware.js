module.exports = (req, res, next) => {

   res.locals.TESTE = 'Este é o valor da variável TESTE';
    next();

};