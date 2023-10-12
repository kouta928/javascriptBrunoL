const prompt = require('prompt-sync')();

//funções de agendamento

//setTimeout executa uma vez quando atinge o tempo

// setTimeout(function(){
//     console.log("QUASE NO FIM DA AULA");
// }, 4000);

// setTimeout(frase, 2000)

// function frase(){
//     console.log("exemplo com funcao por fora");
// }


//setInterval executa repetitivamente quando atinge o tempo
// setInterval(() => {
//     console.log("SALVEEE");
// }, 3000);

//funções de string

//length - pega o tamanho da string
let str = "Qual o tamanho da minha string?";
// console.log(str.length);

//indexof - procurar a ocorrencia de um pedaço de string, caractere da string
// console.log(str.indexOf("o"));

//slice - corta uma string
// console.log(str.slice(5));

//tolowercase - transforma a string em letras minusculas

// console.log(str.toLowerCase());

//touppercase - converte tudo para maiusculo
// console.log(str.toUpperCase());

//replace() - troca uma ocorrencia na string
// console.log(str.replace("da minha string", "do meu texto"));

//------------------------metodos para tratamento de numeros
// parseint - converte um numero em formato de string para inteiro

// let numero = parseInt("200")
// let numero2 = parseInt("100")

// let numero = parseInt(prompt("Digite um número: "));
// let numero2 = parseInt(prompt("Digite um número: "));

// console.log("O resultado da operação é", numero + numero2);

// parsefloat - converte numero string para float 100.50
// let n1 = parseFloat("200.50");
// let n2 = parseFloat("287.99");

// console.log(n1 + n2);

// let n1 = "200.50";
// let n2 = "287.99";

// console.log(parseFloat(n1) + parseFloat(n2));

//tofixed

// let n1 = 200.954329;
// let n2 = 300.341823;

// console.log(n1.toFixed(2));
// console.log(n2.toFixed(2));

//toprecision

// console.log(n1.toPrecision(2));

//tostring - converte dados em string
let numero = 200 + 400;
console.log(numero);
console.log(numero.toString());

numero2 = numero.toString();
console.log(typeof(numero2));
