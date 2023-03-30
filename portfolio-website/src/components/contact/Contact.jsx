import { useRef } from 'react'

import c from './contact.module.scss';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessageLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ppwo37', 'template_2cly7y9', form.current, 'HRDmfhNCGwlZWKC6r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={ `${c.container}` }>
        <div className={ c.contact_options }>
          <article className={ c.option }>
            <MdOutlineEmail className={ c.option_icon }/>
            <h4 className={ c.option_title }>Email</h4>
            <h5 className={ c.option_email }>luisinhotf@gmail.com</h5>
            <a className={ c.option_link } href="mailto:luisinhotf@gmail.com">Send Message</a>
          </article>
          <article className={ c.option }>
            <RiMessageLine className={ c.option_icon }/>
            <h4 className={ c.option_title }>Messanger</h4>
            <h5 className={ c.option_email }>luisinho el pro</h5>
            <a className={ c.option_link } href="https://m.me/luisinho.layme" target="_blank">Send Message</a>
          </article>
          <article className={ c.option }>
            <BsWhatsapp className={ c.option_icon }/>
            <h4 className={ c.option_title }>WhatsApp</h4>
            <h5 className={ c.option_email }>+591 757 817 46</h5>
            <a className={ c.option_link } href="https://wa.me/75781746?text=Hola%20kk%quiero%20saber%20mas%20de%20tus%20servicios." target="_blank">Send Message</a>
          </article>
        </div> {/* .contact_options */}
        <form ref={ form } onSubmit={ sendEmail }>
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea id="" name="message" rows="7" placeholder="Your message" required></textarea>
          <button
            className={ c.form_btn }
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
