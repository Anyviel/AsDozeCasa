window.dozeCasas = {
    nome: document.querySelector('.golden'),
    cover: document.querySelector('.card-image'),
    casa: document.querySelector('.casaOuro'),
    cavaleiroData: cavaleiros,
    currentCavaleiro: {},
    currentValor: 0,

    start() {
        this.update();
    },

    update() {
        const inputElement = document.querySelector('#formulario input');
        const buttonElement = document.querySelector('#formulario button');
        buttonElement.addEventListener('click', valor => {
            valor = inputElement.value;
        })
        switch (valor) {
            case '1':
                console.log(valor);
                this.cavaleiroData = [0];
                this.nome.innerText = this.cavaleiroData;
                this.casa.innerText = this.cavaleiroData;
                //this.cover.style.background = `url('${path(this.cavaleiros.cover)}') no-repeat center center / cover`;
                break;
            case '2':
                alert('Casa de Touro');
                break;
            case '3':
                alert('Casa de Geminni');
                break;
            case '4':
                alert('Casa de Cancer');
                break;
            case '5':
                alert('Casa de Leão');
                break;
            case '6':
                alert('Casa de Virgem');
                break;
            case '7':
                alert('Casa de Libra');
                break;
            case '8':
                alert('Casa de Escorpião');
                break;
            case '9':
                alert('Casa de Sargitário');
                break;
            case '10':
                alert('Casa de Capricornio');
                break;
            case '11':
                alert('Casa de Aquário');
                break;
            case '12':
                alert('Casa de Peixes');
                break;
            default:
                alert('Digite um número de 1 e 12');
        }
    }
}
