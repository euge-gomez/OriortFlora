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
  texto.innerHTML = '<p>Somos una organización enfocada en la <b>enseñanza de la lengua y cultura armenia</b> . Los acompañamos durante todo el proceso de <b>aprendizaje por etapas y niveles</b>.</p><p></p>Nuestros cursos de armenio pueden ser <b>regulares, cuatrimestrales o bimestrales en formatos intensivos</b>, según la necesidad del estudiante.</p>';
}
const changeTextoToMision = () => {
  nosotros.classList.remove('nmvTabNColor');
  mision.classList.add('nmvTabMColor');
  vision.classList.remove('nmvTabVColor');
  texto.innerHTML = '';
  texto.innerHTML = '<p>Nuestra misión es colaborar y ayudar en la <b>búsqueda de tus orígenes</b> para aprender el idioma y la <b>cultura de tus antepasados</b>, acceder a tus <b>escritos</b> y <b>comunicarte</b> con los demás.</p><p>Así es como podemos <b>transmitir la cultura armenia</b> a través de su idioma. Por eso, nos parece importante <b>elaborar contenidos personalizados, creativos e innovadores</b> y lograr <b>insertarse en la cultura armenia</b>.</p><p>Cada instancia de aprendizaje, la trabajamos con el estudiante para que <b>identifique y desarrolle todo el potencial</b> con el uso del idioma armenio.</p>'
}
const changeTextoToVision = () => {
  nosotros.classList.remove('nmvTabNColor');
  mision.classList.remove('nmvTabMColor');
  vision.classList.add('nmvTabVColor');
  texto.innerHTML = '';
  texto.innerHTML = '<p>Ofrecerles la mejor experiencia con el idioma y la cultura armenia. <b>Sin importar la distancia</b> y el lugar, brindarles un espacio de aprendizaje personalizado y herramientas para cada estudiante.</p>'
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