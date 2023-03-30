
(() => {
  const aboutSection = document.querySelector('.about-section'),
    tabsContainer = document.querySelector('.about-tabs')

  tabsContainer.addEventListener('click', (e) => {
    // if e.target contains 'about-tabs__item' class and not contains 'about-tabs__item--active' class
    if(e.target.classList.contains('about-tabs__item') &&
      !e.target.classList.contains('about-tabs__item--active')) {

      const target = e.target.getAttribute('data-target');
      // deactivate existing active 'about-tabs__item'
      document.querySelector('.about-tabs__item--active').classList.remove('about-tabs__item--active');
      // activate new 'tab-item'
      e.target.classList.add('about-tabs__item--active')
      // deactivate existing --active 'tab-content'
      aboutSection.querySelector('.tab-content--active').classList.remove('tab-content--active')
      // activate new 'tab-content'
      aboutSection.querySelector(target).classList.add('tab-content--active')
    }
  })
})();
