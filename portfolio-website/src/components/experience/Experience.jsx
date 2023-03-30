import e from './experience.module.scss';
import Frontend from './Frontend';
import Backend from './Backend';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={ `${e.container} container` }>
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Experience;
