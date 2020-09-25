const arr = [1,2,3,4,5];

const newArr = arr.map(item => item * 10);

console.log(newArr);

const usuario = [
    {
     nome: 'Diego', idade: 23
},];

/*const newteste = teste.map(function(idad){
    return idad.idade;
});*/

console.log(usuario);


const mostraIdade = usuario.map(item => item.idade); 

console.log(mostraIdade);