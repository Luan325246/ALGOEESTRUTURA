const participantes = [];

document.getElementById('registroForm').addEventListener('submit', function(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const categoria = document.getElementById('categoria').value;

    if (nome && cpf && categoria){
        participantes.push({nome, cpf, categoria});
        document.getElementById('nome').value = '';
        document.getElementById('cpf').value = '';
        document.getElementById('categoria').value = '';
        alert('Participante registrado com secesso!');
    } else{
        alert('por favor, preencha todos od campos.');
    }
});

document.getElementById('mostrarLista').addEventListener('click', function (){
    const lista = document.getElementById('listaParticipantes');
    lista.innerHTML = '';
    participantes.forEach(participantes => {
        const li = document.createElement('li');
        li.textContent = `Nome ${participantes.nome}, CPF ${participantes.cpf}, CATEGORIA ${participantes.categoria}`;
        lista.appendChild(li);
    });
});