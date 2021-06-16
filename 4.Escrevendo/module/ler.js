const fs = require('fs').promises;

module.exports = (filePath) => fs.readFile(filePath, 'utf8');

