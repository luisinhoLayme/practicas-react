import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import Sidebar from '../../assets/img/sidebar.png'
import Ecommerce from '../../assets/img/ecommerce.png'
import HOC from '../../assets/img/hoc.png'
import MusicApp from '../../assets/img/musicapp.png'


const Portfolio = () => {
  return (
    <div className='portfolio'>
      {/* heading */}
      <span>React Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={ Sidebar } alt="image portfolio" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ Ecommerce } alt="image portfolio" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ MusicApp } alt="image portfolio" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ HOC } alt="image portfolio" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
