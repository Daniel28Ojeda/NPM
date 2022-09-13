//usar pacotes

var lodash = require('lodash')  //não precisa especificar caminho pois sempre irá pegar dentro do node_modules 

// -------------------------------------------------------------

// Usar funções de um pacote custom criado e publicado no npm;
var custom = require ('pacote_npm_custom');

console.log(custom.sum(5+3));

