const fs = require('fs').promises;

module.exports = (filePath, database) => {
    
    //       (caminho do arquivo, conteúdo, {um objeto com as configurações})
    fs.writeFile(filePath, database, {flag: 'w', encoding: 'utf8'})
};


