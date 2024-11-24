import React from "react";
import "./works.scss";
import WorkCard from '../workcard/WorkCard';
import { jobsData } from "../../jobdata";
import { motion } from 'framer-motion';

const Works = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div className="works" >
      <motion.div className="wrapper" >
        <motion.div className="wrap" variants={variants} initial="initial" whileInView="animate">
          <motion.div className="heading">Work Experience</motion.div>
          <motion.div className="lists">
            {jobsData.map((job, index) => (
              <motion.div key={index}>
                <WorkCard job={job} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Works;
