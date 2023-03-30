(() => {
  const sliderContainer = document.querySelector('.testi-box__contains'),
    slides = sliderContainer.querySelectorAll('.testi-item'),
    slideWidth = sliderContainer.offsetWidth,
    prevBtn = document.getElementById('testi-prev'),
    nextBtn = document.getElementById('testi-next'),
    activeSlide = sliderContainer.querySelector('.testi-item--active');
  let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide)

  // set width of all slides 
  slides.forEach((slide) => {
    slide.style.width = slideWidth + 'px'
  })
  // set width of sliderContainer
  sliderContainer.style.width = slideWidth * slides.length + 'px'

  nextBtn.addEventListener('click', () => {
    if (slideIndex === slides.length - 1) {
      slideIndex = 0
    } else {
      slideIndex++
    }
    slider()
  })
  prevBtn.addEventListener('click', () => {
    if (slideIndex === 0) {
      slideIndex = slides.length - 1
    } else {
      slideIndex--
    }
    slider()
  })

  const slider = () => {
    // desactivate existing active slide
    sliderContainer.querySelector('.testi-item--active').classList.remove('testi-item--active')
    // active new slide
    slides[slideIndex].classList.add('testi-item--active')
    sliderContainer.style.marginLeft = -(slideWidth * slideIndex) + 'px'
  }
  slider()

})();
