
import React from 'react'
import { motion } from 'framer-motion';
const color = [
  {
    bg: "#b3dcf2",
    border: "rgb(167 243 208)",
  },
  {
    bg: "#caa6f7",
    border: "rgb(253 230 138)",
  },
  {
    bg: "#bbf7d0",
    border: "rgb(191 219 254)",
  },
  {
    bg: "#FDBD6E",
    border: "rgb(196 181 253)",
  },
];


const ProjectCard = ({ data, idx }) => {
  return (
    <motion.div
      className='projectcard'
      style={{ boxShadow: `6px 6px 0px ${color[idx % 4].border}` }}
      whileHover={{ scale: 1.02 }}

    >
      <div className="top">
        <div className="leftside">
          alokmaurya22
        </div>
        <div className="rightside">
          <a href={data.live}>Live</a>
          <a href={data.github}>Github</a>
        </div>
      </div>
      <div className="middle">
        <div className="pheading">
          {data.projectName}
        </div>
        <div className="desc">
          {data.desc}
        </div>
      </div>
      <div className="bottom">
        <div className="img"><i className="fa-solid fa-code"></i></div>
        <div className="techstack">
          {data.techStack.map((item, idx) => <div key={idx} className='techstack'> {item}</div>)}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard