import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

import profilePic1 from '../../assets/img/profile1.jpg'
import profilePic2 from '../../assets/img/profile2.jpg'
import profilePic3 from '../../assets/img/profile3.jpg'
import profilePic4 from '../../assets/img/profile4.jpg'

const Testimonial = () => {

  const clients = [
    {
      img: profilePic1,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas eaque fugit quo totam consectetur recusandae? Aliquam distinctio quo, quis earum ab officia, doloribus obcaecati soluta fuga unde quia harum.'
    },
    {
      img: profilePic2,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas eaque fugit quo totam consectetur recusandae? Aliquam distinctio quo, quis earum ab officia, doloribus obcaecati soluta fuga unde quia harum.'
    },
    {
      img: profilePic3,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas eaque fugit quo totam consectetur recusandae? Aliquam distinctio quo, quis earum ab officia, doloribus obcaecati soluta fuga unde quia harum.'
    },
    {
      img: profilePic4,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas eaque fugit quo totam consectetur recusandae? Aliquam distinctio quo, quis earum ab officia, doloribus obcaecati soluta fuga unde quia harum.'
    },
  ]
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>

        <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
        <div className="blur t-blur2" style={{background: 'skyblue'}}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[ Pagination ]}
        slidesPerView={1}
        pagination={{clickable: true}}
      >
        {
          clients.map(({img, review}, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={ img } alt="image Testimonials" />
                <span>{ review }</span>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>
  )
}

export default Testimonial
