let amigos = [];
let cont = 0;
msg_res = document.getElementById('resultado');
candidato = document.getElementById('listaAmigos');

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
        msg_res.innerHTML = '';
        candidato.innerHTML += `${amigos[cont]} <br/>`;
        cont++;
    }


    
    limparCampo('input');
}

function sortearAmigo(){
    num = amigos.length;
    if(num == 0){
        mudaTexto('h2', 'Não há amigos para sortear!')
    } else {
        
        res = Math.round(Math.random() * (num - 1));
        msg_res.innerHTML = `O seu amigo secreto é: ${amigos[res]}!`;
        mudaTexto('h2', 'Reiniciando o sorteio. Digite outro nome!');
        amigos = [];
        lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        cont = 0;
    }

}

