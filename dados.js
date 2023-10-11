//criar variavel na forma antiga (variavel global, deixa vazar dados para fora do escopo)
var nomeVariavel;

//metodo novo baseado no ES6 (variavel local, não deixa vazar dados fora do escopo)
let nomeVar;
let varcomValor = 10;

//constantes (constante tem que ter o valor inicializado, variável pode ser inicializada sem valor)
const nomeConstante = 100;

//old literal com concatenação
let dados="";

dados += "<ul>";
    dados += "<li>"+nomeConstante+"</li>";
    dados += "<li></li>"
    dados += "<li></li>"
dados += "</ul>"

//new literal com interpolação
let dadosLiterais = `
<ul>
    <li>${nomeConstante}</li>
    <li>${(cond) ? true : false}</li> 
    <li></li>
</ul>
`


