import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import socialLinks from "../hero/socialLinks";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
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

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3lfhw5u", // emailjs service ID
        "template_nrxj57s", // emailjs template ID
        formRef.current,
        "0BlzNoy1xP9oKuLgO" // emailjs public api key
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <>
      <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="wrapper">
          <motion.div className="heading">Contact Me</motion.div>
          <motion.div
            ref={ref}
            className="contactwrap"
          >
            <motion.div className="textContainer" variants={variants}>
              <h1 variants={variants}>Let’s Talk</h1>
              <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                {/*<span>er.alokmaurya22@gmail.com</span>*/}
                <span>
                  <a href="mailto:er.alokmaurya22@gmail.com" style={{ color: '#b3dcf2', textDecoration: 'none' }}>
                    er.alokmaurya22@gmail.com
                  </a>
                </span>
              </motion.div>
              <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                {/*<span>Ayodhya, U.P., India -224001</span>*/}
                <span>
                  <a
                    href="https://www.google.com/maps?q=Ayodhya,+U.P.,+India+-224001"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#b3dcf2', textDecoration: 'none' }}
                  >
                    Ayodhya, U.P., India -224001
                  </a>
                </span>

              </motion.div>
            </motion.div>
            <motion.div className="formContainer">
              <form
                ref={formRef}
                onSubmit={sendEmail}
              >
                <input type="text" required placeholder="Name" name="name" />
                <input type="email" required placeholder="Email" name="email" />
                <textarea rows={8} placeholder="Message" name="message" />
                <button>Submit</button>
                {error && "Something Went Wrong! Please resend Later 😢"}
                {success && "Email Sent Successfully ❤"}
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <hr />

      <motion.div className="footer" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="leftside">
          <motion.div className="icons">
            {socialLinks.map((item, idx) => (
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
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="rightside">
          Developed by ALOK with ❤
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;
