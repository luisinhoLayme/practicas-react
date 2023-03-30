import t from './testimonials.module.scss';
import AVTR1 from '../../assets/images/avatar1.jpg';
import AVTR2 from '../../assets/images/avatar2.jpg';
import AVTR3 from '../../assets/images/avatar3.jpg';
import AVTR4 from '../../assets/images/avatar4.jpg';
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: 'Eva Simon',
      review: 'Adipisicing sint voluptas nulla ipsam assumenda? Reprehenderit ad adipisci est laborum quia Dignissimos illum reprehenderit exercitationem odio dolorem Eum dolorum aliquid repellendus voluptatum exercitationem molestiae Modi at odio necessitatibus repellendus'
    },
    {
      avatar: AVTR2,
      name: 'Kylie Quinn',
      review: 'Adipisicing sint voluptas nulla ipsam assumenda? Reprehenderit ad adipisci est laborum quia Dignissimos illum reprehenderit exercitationem odio dolorem Eum dolorum aliquid repellendus voluptatum exercitationem molestiae Modi at odio necessitatibus repellendus'
    },
    {
      avatar: AVTR3,
      name: 'Emma Stone',
      review: 'Adipisicing sint voluptas nulla ipsam assumenda? Reprehenderit ad adipisci est laborum quia Dignissimos illum reprehenderit exercitationem odio dolorem Eum dolorum aliquid repellendus voluptatum exercitationem molestiae Modi at odio necessitatibus repellendus'
    },
    {
      avatar: AVTR4,
      name: 'Jennifer Lawrence',
      review: 'Adipisicing sint voluptas nulla ipsam assumenda? Reprehenderit ad adipisci est laborum quia Dignissimos illum reprehenderit exercitationem odio dolorem Eum dolorum aliquid repellendus voluptatum exercitationem molestiae Modi at odio necessitatibus repellendus'
    },
  ]

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className={ `${ t.testimonials }` }
        // install Swiper modules
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false // xd mira doc
        }}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => (
            <SwiperSlide className={ t.testimonial } key={ index }>
              <div className={ t.client }>
                <img src={ avatar } alt={`Avatar ${index+1}`} className={ t.image }/>
              </div>
              <h5 className={ t.client_name }>{ name }</h5>
              <small className={ t.client_review }>{ review }</small>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Testimonials;
