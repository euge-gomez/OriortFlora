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
  texto.innerHTML = '<p>Somos una organización enfocada a la enseñanza de la lengua y la cultura armenia, satisfaciendo las inquietudes de cada persona y respetando el aprendizaje por etapas y niveles. Ofrecemos cursos de armenio regulares, organizados en cuatrimestres, o bimestrales en formatos intensivos. Queremos ser la guía en la búsqueda de tus orígenes, para aprender el idioma de tus antepasados, para comunicarte con tus seres queridos, poder acceder a los escritos que posees y no pudiste acceder hasta ahora.</p>';
}
const changeTextoToMision = () => {
  nosotros.classList.remove('nmvTabNColor');
  mision.classList.add('nmvTabMColor');
  vision.classList.remove('nmvTabVColor');
  texto.innerHTML = '';
  texto.innerHTML = '<p>Nuestra misión es transmitir la cultura armenia a través de la lengua armenia. Estamos comprometidos a ser tus aliados y ayudarte a aproximarse paulatinamente a la cultura de tus antepasados. Queremos llegar a satisfacer las necesidades de cada uno. Trabajamos desarrollando contenido personalizado,creativo e innovador. Buscamos que todos los que se acerquen a esta propuesta puedan insertarse en la cultura armenia. Nos esforzamos en brindar el mejor servicio del mercado a un precio accesible. Trabajamos con nuestros estudiantes para identificar y desarrollar todo el potencial en el uso del idioma armenio.</p>'
}
const changeTextoToVision = () => {
  nosotros.classList.remove('nmvTabNColor');
  mision.classList.remove('nmvTabMColor');
  vision.classList.add('nmvTabVColor');
  texto.innerHTML = '';
  texto.innerHTML = '<p>Ofrecer la mejor experiencia al estudiante. Llegar a personas interesadas en la lengua y cultura armenia en distintos puntos del mundo. Facilitar a difundir la lengua y cultura armenia a su entorno. Dar tarifas acordes a las posibilidades locales.</p>'
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