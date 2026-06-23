const formLogin = document.getElementById('formLogin');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const mensagemErro = document.getElementById('mensagemErro');

formLogin.addEventListener('submit', function (evento) {

    //Paralize o envio
    evento.preventDefault();

    //Validar dados
    const emailValido = email.value.includes('@') && email.value.includes('.');
    const senhaValida = senha.value.length >= 6;

    if (emailValido == true && senhaValida == true) {
        console.log("entrou!!!!");
        
    } else {
        console.log("deu errado");
    }
})












