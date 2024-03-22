import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

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
      staggerChildren: 0.3,
    },
  }
};


const mountainVariants = {
  initial: {
    x: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    }
  }
};

function Parallax() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <motion.div
      ref={ref}
      className="parallax min-h-screen"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1 style={{ y: yText }} variants={textVariants}>What We Do?</motion.h1>
      <motion.div className="mountains" variants={mountainVariants}></motion.div>
      <motion.div className="stars" style={{ x: yRange }} variants={textVariants}></motion.div>
      <motion.div className="planets" style={{ y: yRange }} variants={textVariants}></motion.div>
    </motion.div>
  );
}

export default Parallax;
