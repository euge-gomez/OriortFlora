const typed = new Typed('.typed', {
  strings: ['<i class="cursosTitularRed">Cursos Online</i>', '<i class="cursosTitularBlue">Cursos Regulares</i>', '<i class="cursosTitularOrange">Cursos Intensivos</i>'],
  stringsElement: '#cadenas-texto',
  typeSpeed: 50,
  startDelay: 300,
  backSpeed: 50,
  smartBackspace: true,
  shuffle: false,
  backDelay: 1500,
  loop: true,
  loopCount: false,
  showCursor: true,
  cursorChar: '|',
  contentType: 'html',
})


/* Funcionalidad del NMV */
const nosotros = document.querySelector('.nmvTabN');
const mision = document.querySelector('.nmvTabM');
const vision = document.querySelector('.nmvTabV');
const texto = document.querySelector('.nvmText');

const changeTextoToNosotros = () => {
  nosotros.classList.add('nmvTabNColor');
  mision.classList.remove('nmvTabMColor');
  vision.classList.remove('nmvTabVColor');
  texto.innerHTML = '';
  texto.innerHTML = '<p>Somos una organización enfocada en la <b>enseñanza de la lengua y cultura armenia</b>. Los acompañamos durante todo el proceso de <b>aprendizaje por etapas y niveles</b>.</p><p>Nuestros cursos de armenio pueden ser <b>regulares, cuatrimestrales o bimestrales en formatos intensivos</b>, según la necesidad del estudiante.</p>';
}
const changeTextoToMision = () => {
  nosotros.classList.remove('nmvTabNColor');
  mision.classList.add('nmvTabMColor');
  vision.classList.remove('nmvTabVColor');
  texto.innerHTML = '';
  texto.innerHTML = '<p>Nuestra misión es colaborar y ayudarte en la <b>búsqueda de tus orígenes</b> a través del aprendizaje del idioma y la <b>cultura de tus antepasados, acceder a escritos y comunicarte</b> con tus seres quieridos.</p><p>Lo hacemos elaborando <b>contenidos creativos, innovadores y personalizados</b>.</p><p>Trabajamos con el estudiante para que identifique y desarrolle todo sus conocimientos de la <b>lengua y la cultura</b> y logre insertarse en la <b>comunidad armenia</b>.</p>'
}
const changeTextoToVision = () => {
  nosotros.classList.remove('nmvTabNColor');
  mision.classList.remove('nmvTabMColor');
  vision.classList.add('nmvTabVColor');
  texto.innerHTML = '';
  texto.innerHTML = '<p>Familiarizarse con la lengua y apropiarse de la cultura armenia. <b>Sin importar la distancia</b> y el lugar, brindarles un espacio de <b>aprendizaje personalizado</b> y proveer a cada estudiante herramientas para autogestionar su propio aprendizaje.</p>'
}

nosotros.addEventListener('click', changeTextoToNosotros);
mision.addEventListener('click', changeTextoToMision);
vision.addEventListener('click', changeTextoToVision);

/* Funcionalidad Leer Más */

let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
  hideText.classList.toggle('show');

  if(hideText.classList.contains('show')) {
    hideText_btn.innerHTML = 'Leer menos';
  } else {
    hideText_btn.innerHTML = 'Leer más';
  }
}