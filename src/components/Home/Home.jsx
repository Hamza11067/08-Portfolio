import "./home.scss";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
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

const imgVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: -30,
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
    x: "-320%",
    transition: {
      delay: 0.1,
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Home() {
  return (
    <>
      <div className="home">
        <div className="wrapper">
          <motion.div
            className="text-container"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}>HAMZA KHALID</motion.h2>
            <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
            <div className="text">
              <span>Tech :</span>
              <ReactTyped
                className="typed-text"
                strings={[
                  "HTML + CSS",
                  "Tailwind CSS",
                  "JavaScript",
                  "React.js",
                  "Next.js",
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop
              />
            </div>

            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt=""
            />
          </motion.div>
          <motion.div
            className="sliding-text"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
          >
            Frontend Web Developer
          </motion.div>
          <motion.div
            className="image-container"
            variants={imgVariants}
            initial="initial"
            animate="animate"
          >
            <img src="/hero.png" alt="" />
          </motion.div>
        </div>
      </div>
      <Services/>
      <Contact/>
    </>
  );
}

export default Home;
