//new -> é uma palavra reservada para instanciar um objeto ou classe

let data = new Date('1985-01-29');
let dias = ["Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"];

let meses = ["Janeiro",
     "Fevereiro",
     "Março",
     "Abril",
     "Maio",
     "Junho",
     "Julho",
     "Agosto",
     "Setembro",
     "Outubro",
     "Novembro",
     "Dezembro"
];

let extenso = `${dias[date.getDay()]}, ${dias[date.getDate()]} de ${dias[date.getMonth]} de ${duas[date.getFullYear]}`;

console.log(extenso)
