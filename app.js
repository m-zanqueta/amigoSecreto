let amigos = [];

function limparCampo(tag){
    let campo = document.querySelector(tag);
    campo.value = '';
}

function mudaTexto(tag, texto){ 
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo (){
    let amigo = document.querySelector('input').value;
   
    if (amigo == ''){
        mudaTexto('h2', "Digite um nome válido!");
    } else{
        mudaTexto('h2', 'Digite o nome de outro amigo!')
        amigos.push(amigo);
        console.log(amigos); //testando a incrementação na lista
    }

    limparCampo('input');
}

function sortearAmigo(){
    num = amigos.length;
    res = Math.round(Math.random() * (num - 1));
    console.log(amigos[res]); // vendo o amigo sorteado
}

