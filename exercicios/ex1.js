//crie um algoritmo para armazenar dados de locação de um veículo.
//a) utilize objetos para criar os dados do veículo e os dados de locação
//b) utilize funções para calcular o valor de locação baseado em diárias e km percorridas
//c) utilize laços de repetição para cadastrar 3 veículos locados(é neste ponto que os cálculos serão realizados)
//d) utilize laços de repetição para listar os dados já com os cálculos efetuados dos veículos


let prompt = require('prompt-sync')();

let diaria, qtdDias, precoGasolina, totalDiaria, totalKm, total;

let modelo, ano, cor, placa, renavam, chassi;

let veiculos = [];

let nCadastro = prompt("Digite a quantidade de carros que quer cadastrar: ");

do{
    modelo = prompt("Digite o modelo: ");
    ano = prompt("Digite o ano: ");
    cor = prompt("Digite a cor: ");
    placa = prompt("Digite a placa: ");
    renavam = prompt("Digite o renavam: ");
    chassi = prompt("Digite o chassi: ");
    diaria = prompt("Preço da diária: R$");
    qtdDias = prompt("Quantidade de dias: ");
    qtdKm = prompt("Quantos km a serem rodados: ");
    precoGasolina = prompt("Preço do litro da gasolina: R$");

    (()=>{
        totalDiaria = parseFloat(diaria) * parseFloat(qtdDias);
        return totalDiaria;
    })();

    (()=>{
        totalKm = parseFloat(precoGasolina) * parseFloat(qtdKm);
        return totalKm;
    })();

    (()=>{
        total = totalDiaria + totalKm;
        return total;
    })();

    veiculos.push({
        modelo : modelo,
        ano : ano,
        cor : cor,
        registro :{
            placa : placa,
            renavam : renavam,
            chassi : chassi
        },
        locacao : {
            diaria : diaria,
            qtdDias : qtdDias,
            qtdKm : qtdKm,
            precoGasolina : precoGasolina,
            totalDiaria : totalDiaria,
            totalKm : totalKm,
            total : total
        }
    })

} while (veiculos.length < nCadastro);

for( n in veiculos){
    console.log(`
    Cadastro de carros de aluguel
    Modelo: ${veiculos[n].modelo}
    Ano: ${veiculos[n].ano}
    Cor: ${veiculos[n].cor}
    Placa: ${veiculos[n].registro.placa}
    Renavam: ${veiculos[n].registro.renavam}
    Chassi: ${veiculos[n].registro.chassi}
    Valor da diária: R$ ${veiculos[n].locacao.totalDiaria}
    Valor da gasolina total: ${veiculos[n].locacao.totalKm}
    Valor total: R$ ${veiculos[n].locacao.total}
    `);
}
