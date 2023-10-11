// laços

// for(let i = 0; i < 100; i++){
//     console.log(`Numero: ${i}`); //com literal
//     console.log("Numero:" +i);  //com concatenação
// }

let dados = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
];

for(dia in dados){                       //código mais simples
    console.log(dados[dia]);
}

for(let i = 0; i < dados.length; i++){    //código mais complexo
    console.log(dados[i]);
};

