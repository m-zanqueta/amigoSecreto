let amigos = [];

function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
}

function adicionarAmigo (){
    let amigo = document.querySelector('input').value;
    amigos.push(amigo);
    console.log(amigos);
    limparCampo()
}
