import React, { useState } from "react";
import { motion } from "framer-motion";
import "./hero.scss";
import Navbar from "../navbar/Navbar";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import socialLinks from "./socialLinks";

const Hero = () => {
  const [showMessage, setShowMessage] = useState(false);

  const imgvar = {
    initial: { x: 0, opacity: 0.9 },
    animate: {
      x: [-2, 2],
      y: [-1, 1],
      opacity: 1,
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const leftvariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 40,
      },
    },
  };

  const rightvarients = {
    initial: {
      x: 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 40,
      },
    },
  };

  const handleCopy = () => {
    const textToCopy = 'npx alokmaurya22';

    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Text copied to clipboard');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000); // Hide message after 5 seconds
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <>
      <Navbar />
      <motion.div className="hero">
        <motion.div className="wrapper">
          <motion.div className="trapper">
            {[...Array(15)].map((_, idx) => (
              <motion.div key={idx}>
                <span className="dot"></span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="leftside" variants={leftvariants} initial="initial" animate="animate">
            <h1>ALOK Maurya</h1>
            <h3>Software Developer</h3>
            <h3>Freelancer </h3>
            <h4>
              Converts <span>air</span> into <span>code</span>
            </h4>
            <motion.div className="social">
              {socialLinks.map((item, idx) => {
                // Check if item.id is 4 and skip rendering
                if (item.id === 4) return null;
                return (
                  <a
                    key={item.id}
                    target="_blank"
                    href={item.link}
                    data-tooltip-id={item.content}
                    data-tooltip-content={item.content}
                  >
                    <i className={item.icon}></i>
                    <Tooltip
                      key={idx + 500}
                      id={item.content}
                      className="tooltipcustom"
                    />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
          <motion.div className="rightside" variants={rightvarients} initial="initial" animate="animate">
            <motion.div className="imgcont">
              <motion.img variants={imgvar} src="./hero3.jpg" alt="" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
