import React from 'react'
import ProjectCard from '../projectcard/ProjectCard';
import './projects.scss';
import projectdata from '../../projectdata';
import { motion } from 'framer-motion';

const Projects = () => {

  const variants = {
    initial: {
      y: 100,
      opacity: 0.3,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
      },
    }
  };
  return (
    <motion.div className='projects' variants={variants} initial="initial" whileInView="animate">
      <div className="wrapper">
        <div className="wrap">

          <div className="heading">
            My Projects
          </div>
          <div className="lists">
            {projectdata.map((item, idx) => <ProjectCard key={idx} data={item} idx={idx} />)}
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Projects