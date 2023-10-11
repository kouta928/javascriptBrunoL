
// obj = {
//     propriedade : valor
// }

let carro = {
    modelo: "Megane Grand Tour Privilege",
    ano: 2009,
    cor: "Vermelho",
    registro: {
        chassi: "GKLFSDJK13LJ4K6DFKS0D",
        placa: "MMM-2C20",
        renavam: "12345678901"
    }
}

// console.log(carro.registro.placa);

let carros =[
    carro
];

console.log(carros)

carros.push({
    modelo: "Celtinha da Massa",
    ano: 2006,
    cor: "Preto",
    registro: {
        chassi: "GKLFSDJK13LJ4K6DFKSDS",
        placa: "JDJ-2384",
        renavam: "12345678902"
    }
})

console.log(carros);