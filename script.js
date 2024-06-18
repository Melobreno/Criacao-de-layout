const userName = document.querySelector('.userName')
let nomeUsuario = prompt('Qual o seu nome?');

if (nomeUsuario === '' || nomeUsuario === null) {
    nomeUsuario = 'Usuário';
}

userName.innerHTML = nomeUsuario;

document.addEventListener('DOMContentLoaded', function() {
// Seleciona o botão e o campo de entrada
let btnInput = document.getElementById('btnInput');
let txtInput = document.getElementById('txtInput');

// Adiciona um listener para o clique no botão
btnInput.addEventListener('click', function() {
    // Obtém o valor do texto de entrada
    let novaTarefa = txtInput.value.trim();

    if (novaTarefa !== '') {
        // Cria um novo item de lista (li) com o texto e o botão de remover
        let novoItem = document.createElement('li');
        novoItem.innerHTML = '<span>' + novaTarefa + '</span> <button class="btn-remove">Apagar</button>';

        // Decide em qual lista adicionar baseado na hora atual (simulação)
        let horaAtual = prompt('Qual o horario da atividade ? (HH)')
        let listaAlvo = horaAtual >= 6 && horaAtual < 18 ? document.getElementById('lista-dia') : document.getElementById('lista-noite');
        
        // Adiciona o novo item à lista adequada
        listaAlvo.appendChild(novoItem);

        // Limpa o campo de texto após adicionar
        txtInput.value = '';

        // Adiciona listener para o botão de remover no novo item
        let btnRemove = novoItem.querySelector('.btn-remove');
        btnRemove.addEventListener('click', function() {
            novoItem.remove();
        });
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
});

    // Adiciona listeners para os botões de remover existentes
    let btnsRemove = document.querySelectorAll('.btn-remove');
    btnsRemove.forEach(function(btn) {
    btn.addEventListener('click', function() {
        btn.parentElement.remove();
    });
    });
});