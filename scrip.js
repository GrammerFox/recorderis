const nombre = document.getElementById('name');
const apellido = document.getElementById('surname');
const edad = document.getElementById('age');

const respuestas = document.getElementById ("respuestas")
const nombreResultado = document.getElementById('respuestaNombre');
const apellidoResultado = document.getElementById('respuestaApellido');
const edadResultado = document.getElementById('respuestaEdad');

function enviarFormulario() {
  nombreResultado.innerText = 'nombre:' + nombre.value;
  apellidoResultado.innerText = 'apellido:' + apellido.value;
  edadResultado.innerText = 'edad:' + edad.value;
  const edadNumero = parseInt(edad.value);

  if (edadNumero > 18) {
    edadResultado.innerText = "es mayor de edad"
    respuestas.classList.remove ("menor")
  } else {
    edadResultado.innerText = "es menor de edad"
    respuestas.classList.add("menor")
  }
}
