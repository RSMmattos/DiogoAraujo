document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensagem-sucesso').style.display = 'block';
    this.reset();
    setTimeout(function() {
        document.getElementById('mensagem-sucesso').style.display = 'none';
    }, 4000);
});
