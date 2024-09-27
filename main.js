document.querySelectorAll('a[href^="#"').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const nome = document.getElementById('txtNome').value;
    const email = document.getElementById('txtEmail').value;
    const numero = document.getElementById('txtNumero').value;

    if (nome === '' || email === '' || numero === '') {
        alert('Por favor, preencha todos os campos.');
        e.preventDefault();
    }
})