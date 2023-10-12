//eventos, tudo no javascript é baseado em eventos, são gatilhos para executar determinado código
// exemplos -> click, mouseover, keyup, submit, scroll, focus, blur, load, resize, change

// const botao = document.querySelector("button");
// const joia = document.getElementById('joia');

// botao.addEventListener('click', function(){
//     // alert("o botão foi pressionado");
//     botao.innerHTML = "SALVE"
//     joia.innerHTML = '<img src="https://uploads.jovemnerd.com.br/wp-content/uploads/2023/10/tesouros_de_ghanor_metas_estendidas__e0g2fi1k-760x428.jpg">'

// });

////////////////////

const formulario = document.querySelector('form')
const container = document.querySelector('#container')

// formulario.addEventListener('submit',function(){
//     let nome = formulario.nome.value
//     let idade = formulario.idade.value

//     container.innerHTML = `
//     <h1>${nome}</h1>
//     <p>${idade}</p>
//     `
// })

formulario.addEventListener('submit',function(){
    let v1 = formulario.valor1.value
    let v2 = formulario.valor2.value
    let resultado = parseFloat(v1) + parseFloat(v2)

    container.innerHTML = `
    <h1>${v1} + ${v2} = ${resultado}</h1>
    `
})