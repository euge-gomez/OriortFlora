const typed = new Typed('.typed', {
  strings: ['<i class="cursosTitular">Cursos Online</i>', '<i class="cursosTitular">Cursos Regulares</i>', '<i class="cursosTitular">Cursos Intensivos</i>'],
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


// JS (babel) de timeline
 (function() {

  // VARIABLES
  const timeline = document.querySelector(".timeline ol"),
    elH = document.querySelectorAll(".timeline li > div"),
    arrows = document.querySelectorAll(".timeline .arrows .arrow"),
    arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
    arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
    firstItem = document.querySelector(".timeline li:first-child"),
    lastItem = document.querySelector(".timeline li:last-child"),
    xScrolling = 280,
    disabledClass = "disabled";

  // START
  window.addEventListener("load", init);

  function init() {
    setEqualHeights(elH);
    animateTl(xScrolling, arrows, timeline);
    setSwipeFn(timeline, arrowPrev, arrowNext);
    setKeyboardFn(arrowPrev, arrowNext);
  }

  // SET EQUAL HEIGHTS
  function setEqualHeights(el) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      const singleHeight = el[i].offsetHeight;

      if (counter < singleHeight) {
        counter = singleHeight;
      }
    }

    for (let i = 0; i < el.length; i++) {
      el[i].style.height = `${counter}px`;
    }
  }

  // CHECK IF AN ELEMENT IS IN VIEWPORT
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // SET STATE OF PREV/NEXT ARROWS
  function setBtnState(el, flag = true) {
    if (flag) {
      el.classList.add(disabledClass);
    } else {
      if (el.classList.contains(disabledClass)) {
        el.classList.remove(disabledClass);
      }
      el.disabled = false;
    }
  }

  // ANIMATE TIMELINE
  function animateTl(scrolling, el, tl) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      el[i].addEventListener("click", function() {
        if (!arrowPrev.disabled) {
          arrowPrev.disabled = true;
        }
        if (!arrowNext.disabled) {
          arrowNext.disabled = true;
        }
        const sign = (this.classList.contains("arrow__prev")) ? "" : "-";
        if (counter === 0) {
          tl.style.transform = `translateX(-${scrolling}px)`;
        } else {
          const tlStyle = getComputedStyle(tl);
          // add more browser prefixes if needed here
          const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
          const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
          tl.style.transform = `translateX(${values}px)`;
        }

        setTimeout(() => {
          isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
          isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
        }, 1100);

        counter++;
      });
    }
  }

  // ADD SWIPE SUPPORT FOR TOUCH DEVICES
  function setSwipeFn(tl, prev, next) {
    const hammer = new Hammer(tl);
    hammer.on("swipeleft", () => next.click());
    hammer.on("swiperight", () => prev.click());
  }

  // ADD BASIC KEYBOARD FUNCTIONALITY
  function setKeyboardFn(prev, next) {
    document.addEventListener("keydown", (e) => {
      if ((e.which === 37) || (e.which === 39)) {
        const timelineOfTop = timeline.offsetTop;
        const y = window.pageYOffset;
        if (timelineOfTop !== y) {
          window.scrollTo(0, timelineOfTop);
        }
        if (e.which === 37) {
          prev.click();
        } else if (e.which === 39) {
          next.click();
        }
      }
    });
  }

})();