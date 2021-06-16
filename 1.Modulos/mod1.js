const nome = 'Tundê';
const sobrenome = 'Cavalcante';

const falaNome = () => (nome + sobrenome);

//Module.export é um objeto padrão do Node
exports.nome = nome;
exports.sobrenome = sobrenome;
//O this vai apontar para esse objeto
this.qualquercoisa = 'Teste';


console.log(module.exports);