window.dozeCasas = {
    nome: document.querySelector('.golden'),
    cover: document.querySelector('.card-image'),
    casa: document.querySelector('.casaOuro'),
}

const inputElement = document.querySelector('#formulario input');
const buttonElement = document.querySelector('#btn');

buttonElement.addEventListener('click', valor => {
    update(inputElement.value)
})

function update(valor) {
    let { dozeCasas, cavaleiros } = window;
    if (valor >= 1 && valor <= 12) {
        const cavaleiro = cavaleiros[parseInt(valor) - 1];

        dozeCasas.nome.innerText = cavaleiro.nome;
        dozeCasas.casa.innerText = cavaleiro.casa;
        dozeCasas.cover.style.backgroundImage = 'url(' + cavaleiro.cover + ')';
    } else {
        alert('Digite um número de 1 e 12');
    }
}
