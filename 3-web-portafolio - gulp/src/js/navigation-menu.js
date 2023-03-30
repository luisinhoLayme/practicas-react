(() => {
  const hamburgerBtn = document.querySelector('.hamburger-btn'),
    navMenu = document.querySelector('.menu'),
    closeNavBtn = navMenu.querySelector('.menu__close');

  const showNavMenu = () => {
    navMenu.classList.toggle('menu--open')
    bodyScrollingToggle()
    // fadeOutEffect()
  }

  const fadeOutEffect = () => {
    console.log('luis');
    document.querySelector('.fade-out-effect').classList.add('fade-out-effect--active')
    setTimeout(() => {
      document.querySelector('.fade-out-effect').classList.remove('fade-out-effect--active')
    }, 300)
  }


  hamburgerBtn.addEventListener('click', showNavMenu)
  closeNavBtn.addEventListener('click', showNavMenu)

  // attach an event handler to document
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('link-item')) {
      /* make sure e.target.hash has a value before overridding default behavior*/
      if (e.target.hash !== '') {
        // prevent default anchor click behavior
        e.preventDefault()
        const hash = e.target.hash
        // deactivate existing active 'section'
        document.querySelector('.section--active').classList.add('hide')
        document.querySelector('.section--active').classList.remove('section--active')
        // active new 'section'
        document.querySelector(`${hash}`).classList.add('section--active')
        document.querySelector(`${hash}`).classList.remove('hide')
        // deactivate existing active navigation menu 'link-item'
        navMenu.querySelector('.navigation__link--active').classList.remove('navigation__link--active')
        // if clicked 'link-item' is contained withing the navigation menu
        if (navMenu.classList.contains('menu--open')) {
          // active new navigation menu 'link-item'
          e.target.classList.add('navigation__link--active')
          // hide navigation menu
          showNavMenu()
        } else {
          let navItem = document.querySelectorAll('.link-item')
          navItem.forEach((item) => {
            if (hash === item.hash) {
              // active new navigation menu 'link-item'
              item.classList.add('navigation__link--active')
            }
          })
        }
        // add hash (#) to url 
        // jajja practique replace xd jajajaaj
        // let withoutHash = hash.replace(/#/, '');
        window.location.hash = hash
        console.log(document.root);
      }
    }
  })
})();
