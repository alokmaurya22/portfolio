import React from "react";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import "react-tooltip/dist/react-tooltip.css";
import "./workcard.scss";

const WorkCard = ({ job }) => {
  return (
    <motion.div
      className="workcard"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.8 }}
    >
      <div className="top">
        <div className="leftcard">
          <motion.div
            className="companyname"
            data-tooltip-id={`${job.id + 120}`}
            data-tooltip-content={job.specialNote}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            {job.companyName}
          </motion.div>
          <Tooltip
            key={job.id + 500}
            id={job.id + 120}
            className="tooltipcustom"
          />
        </div>
        <div className="rightcard">
          <div className="type">{job.jobType}</div>
          <div className="duration">{job.jobDuration}</div>
        </div>
      </div>
      <div className="middle">
        <div className="rolename">{job.roleName}</div>
        <ul>
          {job.workExperience.map((element, idx) => (
            <li key={idx}>{element}</li>
          ))}
        </ul>
      </div>
      <div className="bottom">
        <div className="img">
          <i className="fa-solid fa-code"></i>
        </div>
        <div className="techstack">{job.techStack}</div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
