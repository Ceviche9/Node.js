const fs = require('fs').promises;

module.exports = (filePath, data) => {
    
    //       (caminho do arquivo, conteúdo, {um objeto com as configurações})
    fs.writeFile(filePath, data, {flag: 'w', encoding: 'utf8'})
};


