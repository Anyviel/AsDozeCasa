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

/* Animação dos Círculos  */

const ulCircles = document.querySelector("ul.circles");

//Remove a scrollbar no inicio da animação dos círculos.
ulCircles.addEventListener("animationstart", event => {
    document.querySelector("body").style.overflow = "hidden";
});

for (let i = 0; i < 50; i++) {
    const li = document.createElement('li');

    //Constante para a variação dos valores.
    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 50)); //Cria os tamanhos variados dos círculos.
    const position = random(1, 95); //Modifica aleatoriamente as possições entre 1 e 95.
    const delay = random(5, 0.1); //Gera um atraso para a movimentação dos círculos.
    const duration = random(24, 12); //Define aleatoriamente o tempo de duração do efeito.

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`; //Recebe um valor negativo para não ser gerado no campo de visão da window.

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    ulCircles.appendChild(li); //Necessário para diferenciar cada elemento da lista (li).
}