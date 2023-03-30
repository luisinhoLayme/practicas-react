// hide all sections except active

(() => {
  const sections = Array.from(document.querySelectorAll('.section'))

  sections.map((section) => {
    if ( !section.classList.contains('section--active') ) {
      section.classList.add('hide')
    }
  })
})();




