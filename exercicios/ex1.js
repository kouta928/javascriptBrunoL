//crie um algoritmo para armazenar dados de locação de um veículo.
//a) utilize objetos para criar os dados do veículo e os dados de locação
//b) utilize funções para calcular o valor de locação baseado em diárias e km percorridas
//c) utilize laços de repetição para cadastrar 3 veículos locados(é neste ponto que os cálculos serão realizados)
//d)utilize laços de repetição para listar os dados já com os cálculos efetuados dos veículos


// let carros = [
//     carro
// ];

// let carro = {
//     modelo : "",
//     ano : "",
//     cor : ""
// };

// for(let i = 0; i < 5; i++){
//     console.log(`Carro modelo: ${i}`);
// }

function calcularValorLocacao(veiculo, diarias, kmPercorridos) {
    const valorDiaria = veiculo.valorDiaria * diarias;
    const valorKm = veiculo.valorKm * kmPercorridos;
    return valorDiaria + valorKm;
}

// Array para armazenar os veículos
const veiculos = [
    { marca: 'Ford', modelo: 'Fiesta', valorDiaria: 100, valorKm: 0.2 },
    { marca: 'Toyota', modelo: 'Corolla', valorDiaria: 150, valorKm: 0.3 },
    { marca: 'Honda', modelo: 'Civic', valorDiaria: 120, valorKm: 0.25 },
];

// Array para armazenar as locações
const locacoes = [];

// Função para cadastrar locações
function cadastrarLocacao(veiculo, diarias, kmPercorridos) {
    const valorLocacao = calcularValorLocacao(veiculo, diarias, kmPercorridos);
    locacoes.push({
        veiculo,
        diarias,
        kmPercorridos,
        valorLocacao,
    });
}

// Cadastrar 3 locações usando um loop
for (let i = 0; i < 3; i++) {
    const veiculo = veiculos[i];
    const diarias = Math.floor(Math.random() * 7) + 1; // Diárias aleatórias de 1 a 7
    const kmPercorridos = Math.floor(Math.random() * 300) + 1; // Km aleatórios de 1 a 300
    cadastrarLocacao(veiculo, diarias, kmPercorridos);
}

// Listar os dados das locações com cálculos
for (const locacao of locacoes) {
    console.log(`Veículo: ${locacao.veiculo.marca} ${locacao.veiculo.modelo}`);
    console.log(`Diárias: ${locacao.diarias}`);
    console.log(`Km percorridos: ${locacao.kmPercorridos} km`);
    console.log(`Valor Total da Locação: R$ ${locacao.valorLocacao.toFixed(2)}`);
    console.log('------------------------');
}