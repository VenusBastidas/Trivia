let preguntas = [
  "¿Quién es este actor?",
  "¿Cuál es la película más taquillera hasta la actualidad?",
  "¿En el 2018, cuál ganó a mejor película en los premios Oscar?"
];
let respuestas = [
  ["Tom Hanks", "Nathalie Portman", "Clint Eastwood"],
  ["Avatar", "Batman vs Superman", "Black Panther"],
  ["La forma del agua", "11 años de esclavitud", "En busca de la felicidad"]
];
let imagenes = [
  /*tom hanks */'<img src="https://img2.rtve.es/i/?w=1600&i=1625763981743.jpg">', 
  /*proyector*/ '<img src="https://media.istockphoto.com/photos/vintage-film-projector-and-film-screening-picture-id1178819875?b=1&k=20&m=1178819875&s=170667a&w=0&h=RUKFM3N_Z5EY9oPslUYb0i8cWe8byTMcfTTo2vtp_YE=">',
  /*oscar*/ '<img src="https://escandala.com/wp-content/uploads/2020/09/46d9d8c585f16e695cd7808bce37ec961dc56e720b3404be4c7d82422c6e5231.jpg">'
];

const valorAleatorio = generarAleatorio();
const pregunta = preguntas[valorAleatorio];
const respuesta = respuestas[valorAleatorio][0];
const imagen = imagenes[valorAleatorio];

function generarAleatorio(){
  return Math.floor(Math.random() * preguntas.length);
};

function mostrarPreguntas() {
  
  document.getElementById("img").innerHTML = imagen;
  document.getElementById("preguntas").innerHTML = pregunta;
  const respuestas_reordenadas = [];
  const copiaRespuestas = [];
  respuestas[valorAleatorio].forEach(e => copiaRespuestas.push(e)); //copia de array
  for (let i = 0; i < respuestas[valorAleatorio].length; i++) {
    let posicion_aleatoria = Math.floor(Math.random() * copiaRespuestas.length); //azar
    respuestas_reordenadas.push(copiaRespuestas[posicion_aleatoria]) 
    copiaRespuestas.splice(posicion_aleatoria, 1);
  }
  respuestas_reordenadas.forEach(e =>{
    let elem =  `<br><input type = "radio" name="opciones" onclick="contarRespuestas(event)" value="${e}"><label>${e}</label>`;
    document.getElementById("preguntas").innerHTML += elem;
  });
}

 /* function contarRespuestas(event){
    if( event.target.value === respuesta ){
      alert('Correcto')
    } else {
      alert('Incorrecto')
    }
  }*/
  
  function contarRespuestas(event){
        if( event.target.value === respuesta ){
          Swal.fire({
            title: 'Respuesta correcta',
            icon: 'success',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
         } else {
          Swal.fire({
            title: 'Respuesta incorrecta',
            icon: 'error',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
  }
  
  // quitar mensaje de inicio la pantalla
  let screen = document.getElementById("screen");
  
  function draw() {
    let info = document.getElementById("header")
    info.style.display = "none";
    mostrarPreguntas();
  }