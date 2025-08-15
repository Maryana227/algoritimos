const avanca = document.querySelectorA11('.bnt-proximo');

avanca.forEach(button => {
    button.addEventlistener('click', function(){
        const atual = document.querySelector('.ativo');
        cosnt proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})