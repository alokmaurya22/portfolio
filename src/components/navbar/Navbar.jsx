import React from "react";
import "./navbar.scss";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const variants = {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div className="navbar">
      <motion.div className="wrapper">
        <motion.div
          className="navlists"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <motion.div className="list">
            <a href="#home">HOME</a>
          </motion.div>
          <motion.div className="list ">
            <a href="#worksection1">EXPERIENCE</a>
          </motion.div>
          <motion.div className="list">
            <a href="#projectsection1">PROJECT</a>
          </motion.div>
        </motion.div>
        <motion.div
          className="cvwrap"
          data-tooltip-id="CV"
          data-tooltip-content="Download Resume"
        >
          <a
            href="https://drive.google.com/file/d/1jv8BFAjuOoG3T9IAK80Qi8TPqLBRWWng/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>CV</b>
          </a>
        </motion.div>
      </motion.div>
      <Tooltip id="cv" className="tooltipcustom" />
    </motion.div>
  );
};

export default Navbar;
