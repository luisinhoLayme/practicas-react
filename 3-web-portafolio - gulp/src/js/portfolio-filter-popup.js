(() => {
  const filterContainer = document.getElementById('portfolio-filter'),
    portfolioItemsContainer = document.getElementById('portfolio-items'),
    portfolioItems = document.querySelectorAll('.portfolio-item'),
    popup = document.getElementById('portfolio-popup'),
    prevBtn = document.getElementById('pp-prev'),
    nextBtn = document.getElementById('pp-next'),
    closeBtn = document.getElementById('pp-close'),
    projectDetailsContainer = document.getElementById('pp-details'),
    projectDetailsBtn = document.getElementById('pp-btn');
  let itemIndex, slideIndex, screenshots;

  /* filter portfolio items */
  filterContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('portfolio-filter__item') &&
      !e.target.classList.contains('portfolio-filter__item--active')) {
      // desactivate existing active 'portfolio-filter__item'
      filterContainer.querySelector('.portfolio-filter__item--active').classList.remove('portfolio-filter__item--active');
      // activate new filter item
      e.target.classList.add('portfolio-filter__item--active');

      const target = e.target.getAttribute('data-target')
      portfolioItems.forEach((item) => {
        if (target === item.getAttribute('data-category') || target === 'all') {
          item.classList.remove('portfolio-item--hide')
          item.classList.add('portfolio-item--show')
        } else {
          item.classList.remove('portfolio-item--show')
          item.classList.add('portfolio-item--hide')
        }
      })
    } 
  })

  portfolioItemsContainer.addEventListener('click', (e) => {
    if (e.target.closest('.portfolio-item__inner')) {
      const portfolioItem = e.target.closest('.portfolio-item__inner').parentElement

      // get the portfolioItem index
      itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem)
      screenshots = portfolioItems[itemIndex].querySelector('.portfolio-item__image').getAttribute('data-screenshots')

      // convert screenshots into array
      screenshots = screenshots.split(',')
      if (screenshots.length === 1) {
        prevBtn.style.display = 'none'
        nextBtn.style.display = 'none'
      } else {
        prevBtn.style.display = 'block'
        nextBtn.style.display = 'block'
      }
      slideIndex = 0;
      popupToggle()
      popupSlideshow()
      popupDetails()
    }
  })

  closeBtn.addEventListener('click', () => {
    popupToggle()
    if (projectDetailsContainer.classList.contains('pp-details--active')) {
      popupDetailsToggle()
    }
  })

  const popupToggle = () => {
    popup.classList.toggle('pp--open')
    bodyScrollingToggle()
  }

  const popupSlideshow = () => {
    const imgSrc = screenshots[slideIndex]
    const popupImg = popup.querySelector('.pp__img')
    // activate loader until the popupImg loaded
    popup.querySelector('.pp__preloader').classList.add('pp__preloader--active')
    popupImg.src = imgSrc
    popupImg.onload = () => {
      // desactivate loader after the popupImg loaded
      popup.querySelector('.pp__preloader').classList.remove('pp__preloader--active')
    }
    popup.querySelector('.pp__counter').innerHTML = (slideIndex + 1) + ' of ' + screenshots.length
  }

  // next slide 
  nextBtn.addEventListener('click', () => {
    if (slideIndex === screenshots.length - 1) {
      slideIndex = 0
    } else {
      slideIndex++
    }
    popupSlideshow()
  })

  // prev slide 
  prevBtn.addEventListener('click', () => {
    console.log(screenshots.length);
    if (slideIndex === 0) {
      slideIndex = screenshots.length - 1
    } else {
      slideIndex--
    }
    popupSlideshow()
  })

  const popupDetails = () => {
    // if portfolio-details not exists
    if (!portfolioItems[itemIndex].querySelector('.portfolio-details')) {
      projectDetailsBtn.style.display = 'none'
      return // end function execute
    }
    projectDetailsBtn.style.display = 'block'
    // get the project details
    const details = portfolioItems[itemIndex].querySelector('.portfolio-details').innerHTML
    // set the project details
    popup.querySelector('.pp-details__project').innerHTML = details
    // get the project title
    const title = portfolioItems[itemIndex].querySelector('.portfolio-item__title').innerHTML
    // set the project title
    popup.querySelector('.pp-details__h2').innerHTML = title
    // get the project category
    const category = portfolioItems[itemIndex].getAttribute('data-category')
    // set the project category
    popup.querySelector('.pp-details__category').innerHTML = category.split('-').join(" ")
  }

  projectDetailsBtn.addEventListener('click', () => {
    popupDetailsToggle()
  })

  const popupDetailsToggle = () => {
    if (projectDetailsContainer.classList.contains('pp-details--active')) {
      projectDetailsBtn.querySelector('i').classList.add('fa-plus')
      projectDetailsBtn.querySelector('i').classList.remove('fa-minus')
      projectDetailsContainer.classList.remove('pp-details--active')
      projectDetailsContainer.style.maxHeight = 0 + "px"
    } else {
      projectDetailsBtn.querySelector('i').classList.remove('fa-plus')
      projectDetailsBtn.querySelector('i').classList.add('fa-minus')
      projectDetailsContainer.classList.add('pp-details--active')
      projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px"
      popup.scrollTo(0, projectDetailsContainer.offsetTop)
    }
  }

})();

const bodyScrollingToggle = () => {
  document.body.classList.toggle('hidden-scrolling')
}
