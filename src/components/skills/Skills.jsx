import React from "react";
import "./skills.scss";
import SkillCard from "../skillcard/SkillCard";
import { motion } from 'framer-motion';

const skillsdata = [
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "React", icon: "fa-brands fa-react" },
  { name: "Java", icon: "fa-brands fa-java" },
  { name: "SpringBoot", icon: "fa-solid fa-leaf" },
  { name: "MySQL", icon: "fa-solid fa-database" },
  { name: "PHP", icon: "fa-brands fa-php" },
  { name: "Python", icon: "fa-brands fa-python" },
  { name: "Appwrite", icon: "fas fa-database text-pink-500" },
  { name: "Firebase", icon: "fas fa-fire text-yellow-400" },
  { name: "Framer Motion", icon: "fa-solid fa-film" },
  { name: "Redux Toolkit", icon: "fas fa-toolbox" },
  { name: "Bash", icon: "fas fa-terminal" },
  { name: "Git", icon: "fa-brands fa-git" },
  { name: "Many More", icon: "fa-solid fa-arrow-up-right-dots" },
];



const Skills = () => {
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
    <motion.div className="skills" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="wrapper">
        <motion.div className="cont">
          <motion.div className="wrap">
            <motion.div className="heading">Developed Skills</motion.div>
            <motion.div className="lists">
              {skillsdata.map((item, idx) => (
                <SkillCard key={idx} data={item} idx={idx} />
              ))}
            </motion.div>
          </motion.div>
          <motion.div className="texthead">SKILLS</motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
