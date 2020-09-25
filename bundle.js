"use strict";

var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (item) {
  return item * 10;
});
console.log(newArr);
var usuario = [{
  nome: 'Diego',
  idade: 23
}];
/*const newteste = teste.map(function(idad){
    return idad.idade;
});*/

console.log(usuario);
var mostraIdade = usuario.map(function (item) {
  return item.idade;
});
console.log(mostraIdade);
