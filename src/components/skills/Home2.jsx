import "./uncle.scss";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  'Hello',
  'Hola',
  'Bonjour',
  'Hallo',
  'Ciao',
  'Olá',
  'Привет',
  '你好',
  'こんにちは',
  '안녕하세요',
  'नमस्ते',
  'مرحبا',
  'Γειάσου',
  'Merhaba',
  'Hej'
];
const uncleVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const uncle = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="uncle">
      <div className="wrapper">
        <motion.div className="greetingcontainer"
          variants={uncleVariants}
          key={greetings[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {greetings[index]}
        </motion.div>
        <motion.div
          className="textContainer"
          variants={uncleVariants}
          initial="initial"
          animate="animate"
        >

          <motion.h2 variants={uncleVariants}>
            ALOK KUMAR MAURYA
          </motion.h2>
          <motion.h1 variants={uncleVariants}>
            Full Stack Developer
          </motion.h1>
          <motion.img
            variants={uncleVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        WELCOME TO MY CREATIVE SPACE
      </motion.div>
    </div>
  );
};

export default uncle;
