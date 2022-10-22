const cursorButton = document.querySelector('#btn-cursor');
const allElements = document.querySelectorAll('*');

let isActive = true; // Variável de verificação

cursorButton.addEventListener('click', () => { // evento do botao Cursor Select
    
    let elementoClicado;
    
    document.querySelector('.field-teste').addEventListener('click', (event) => { // Captura do evento do elemento clicado - Click
        elementoClicado = event.target;
        elementoClicado.classList.toggle('elemento-clicado');
        console.log(event.target);
    });

    document.querySelector('.field-teste').addEventListener('mouseover', (event) => { // Captura do evento do elemento clicado - Hover
        elementoClicado = event.target;
        elementoClicado.classList.toggle('elemento-clicado-hover');
    });

    if(isActive) { // Verificação se o botão select está ativo ou não
        isActive = false;
        cursorButton.src = 'https://i.postimg.cc/QtkV6jJW/cursor-select-blue.png';
        cursorButton.classList.add('btn-cursor-ativo');
    } else {
        isActive = true;
        cursorButton.src = 'https://i.postimg.cc/g04FVkC2/cursor-select.png';
        cursorButton.classList.remove('btn-cursor-ativo'); 

        for (i = 0; i < allElements.length; i++) { // Reset
            allElements[i].classList.remove('elemento-clicado');
            allElements[i].classList.remove('elemento-clicado-hover');
        }
    }

});
