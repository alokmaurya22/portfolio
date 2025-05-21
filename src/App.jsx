import React from 'react'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Works from './components/work/Works'
import Projects from './components/project/Projects';
import Contact from './components/contact/Contact'
// import SkillTree from './Skill'
const App = () => {
  return (
    <div>
      <section id="home" className='homesection'>
        <Hero />
      </section>
      <hr />
      <section id="about" className='aboutsection'>
        <About />
      </section>
      <hr />
      <section id="skills" className='skilssection'>
        <Skills />
        {/* <SkillTree/> */}
      </section>
      <hr id="worksection1" />
      <br></br>

      <section id="worksection" className='worksection'>
        <Works />
      </section>
      <hr id="projectsection1" />
      <br></br>

      <section id="projectsection" className='projectsection'>
        <Projects />
      </section>


      <hr />

      <section id="contact" className='contectsection'>
        <Contact />
      </section>
    </div>
  )
}

export default App