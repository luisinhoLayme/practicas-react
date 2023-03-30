import Service from './Service';
import s from './services.module.scss';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className={ `${s.container} container` }>
        <Service
          mas={false}
          title="UI/UX Design"
        />
        <Service
          mas={true}
          title="Web Development"
        />
        <Service
          mas={false}
          title="Content Creation"
        />
      </div>
    </section>
  )
}

export default Services;
