//crie um algoritmo para armazenar dados de locação de um veículo.
//a) utilize objetos para criar os dados do veículo e os dados de locação
//b) utilize funções para calcular o valor de locação baseado em diárias e km percorridas
//c) utilize laços de repetição para cadastrar 3 veículos locados(é neste ponto que os cálculos serão realizados)
//d) utilize laços de repetição para listar os dados já com os cálculos efetuados dos veículos


const formulario = document.querySelector('form')
const container = document.querySelector('#container')

let diaria, qtdDias, precoGasolina, totalDiaria, totalKm, total;

let  renavam, chassi;

    formulario.addEventListener('submit',function(){

        let dia = formulario.diaria.value
        let qtdDia = formulario.qtdDias.value
        let qtdKm = formulario.qtdKm.value
        let modelo = formulario.modelo.value
        let ano = formulario.ano.value
        let cor = formulario.cor.value
        let placa = formulario.placa.value
        let precoGasolina = formulario.precoGasolina.value

        let totalDiaria = parseFloat(dia) * parseFloat(qtdDia);
        let totalKm = parseFloat(qtdKm) * parseFloat(precoGasolina);
    
        container.innerHTML = `
        <h1>Modelo do carro: ${modelo} </h1>
        <h1>Ano: ${ano}</h1>
        <h1>Cor: ${cor} </h1>
        <h1>Placa: ${placa} </h1>
        <h1>Valor total das diárias: R$ ${totalDiaria} </h1>
        <h1>Valor total das diárias: R$ ${totalKm} </h1>
        `
    })

