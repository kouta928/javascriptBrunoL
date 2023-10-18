// armazenamento de informações no navegador
// 1. cookies
// 2. localStorage
// 3. sessionStorage
//

// usando cookie

// document.cookie = "user=50;time=19:15"

// console.log(document.cookie);

// usando cookie
// user=50; exibirBanner=true; usuarioLogado=true;

// document.cookie = "usuarioLogado=true"

// let cookies = document.cookie.split(';')
// console.log(cookies);

//LOCAL STORAGE
// setItem -> seta um item, grava um item
// getItem -> traz um item gravado

localStorage.setItem("usuario", JSON.stringify({
    nome: "Diego",
    user: "bracellos",
    ultimoAcesso: "2023-10-16"
}));
console.log(localStorage.getItem("usuario"));

// TEM VALIDADE ENQUANTO O NAVEGADOR ESTIVER ABERTO

// sessionStorage.setItem()
// sessionStorage.getItem()


