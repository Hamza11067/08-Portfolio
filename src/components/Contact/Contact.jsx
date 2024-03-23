import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [succcess, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ubcg5cj", "template_kzmydix", formRef.current, {
        publicKey: "iUQ3LzVfbQqy2J4Bt",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
        }
      );
  };

  const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="contact md:min-h-screen py-8 pt-20 md:pt-0"
      variants={variants}
      initial="initial"
      animate="animate"
      // whileInView="animate"
    >
      <motion.div className="text-container" variants={variants}>
        <motion.h1 variants={variants}>Let{"'"}s Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hamzakhalid1067@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Lahore, Pakistan.</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>0323-1045234</span>
        </motion.div>
      </motion.div>
      <motion.div className="form-container">
        <motion.form
          ref={formRef}
          action="submit"
          onSubmit={sendEmail}
        >
          <input type="text" placeholder="Your Name" required name="name" />
          <input type="email" placeholder="Your Email" required name="email" />
          <textarea
            rows="6"
            placeholder="What do you want to say?"
            name="message"
          ></textarea>
          <button>Submit</button>
          {succcess && "Success!"}
          {error && "Error!"}
        </motion.form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
