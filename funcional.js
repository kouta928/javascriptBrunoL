//programação funcional

//função Map, mapear o array para fazer funções com ela. serve para criar um novo array sem modificar o array original.

// let dados = [3,4,5,6];

// let dadosNovo = dados.map(function(element){
//     return element * 3;
// });

// console.log(dadosNovo);


// //sem a map, usando laço

// let dados2  = [3,4,5,6];

// for(let i = 0; i < dados.length; i++){
//     dadosNovo[i] = dados[i] * 3;
// }

//reduce

let numeros = [10,20,30]

let resultado = numeros.reduce(function(total,numero){
    return(total + numero)
}) / numeros.length

console.log(resultado);