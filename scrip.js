const nombre=document.getElementById("name");
const apellido=document.getElementById("surname");

const nombreResultado = document.getElementById("respuestaNombre")
const apellidoResultado = document.getElementById("respuestaApellido")

function enviarFormulario(){
    nombreResultado.innerText = "nombre:"+nombre.value;
    apellidoResultado.innerText = "apellido:"+apellido.value;
}

