const formProf = document.getElementById('formProfessor');
const nomeProf = document.getElementById('nomeProfessor');
const registro = document.getElementById('registro');
const funcaoAula = document.getElementById('funcao');

formProf.addEventListener('submit', function (evento) {

    //Paralize o envio
    evento.preventDefault();

    let formularioValido = true;

    if (nomeProf.value.trim() == "") {
        formularioValido = false;
        nomeProf.classList.add('is-invalid');
        nomeProf.classList.remove("is-valid");

    } else {
        nomeProf.classList.add("is-valid");
        nomeProf.classList.remove("is-invalid")

    }

    if (registro.value.trim() == "") {
        formularioValido = false;
        registro.classList.add('is-invalid');
        registro.classList.remove("is-valid");

    } else {
        registro.classList.add("is-valid");
        registro.classList.remove("is-invalid")

    }

    if (funcaoAula.value.trim() == "") {
        formularioValido = false;
        funcaoAula.classList.add('is-invalid');
        funcaoAula.classList.remove("is-valid");

    } else {
        funcaoAula.classList.add("is-valid");
        funcaoAula.classList.remove("is-invalid")

    }

})












