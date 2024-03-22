import { useRef } from "react";
import "./services.scss";
import { motion} from "framer-motion";
import Parallax from "../Parallax/Parallax";

function Services() {
  const ref = useRef();
  const variants = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <Parallax/>
      <motion.div
        ref={ref}
        className="services"
        variants={variants}
        initial="initial"
        // animate={isInView && "animate"}
        animate="animate"
      >
        <motion.div className="text-container" variants={variants}>
          <p>
            I focus on helping you grow <br /> and move forward
          </p>
          <hr />
        </motion.div>
        <motion.div className="title-container" variants={variants}>
          <div className="title">
            <img src="/people.webp" alt="#" />
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
            </h1>
          </div>
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
              Business.
            </h1>
            <button>WHAT WE DO?</button>
          </div>
        </motion.div>
        <motion.div className="list-container" variants={variants}>
          <motion.div
            className="box"
            whileHover={{ background: "darkgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae officiis consectetur maxime, voluptate illo cum commodi
              eligendi. Eligendi iste dolorum aliquam. Ipsa atque eum commodi
              iusto, perspiciatis animi aliquam perferendis?
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "darkgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae officiis consectetur maxime, voluptate illo cum commodi
              eligendi. Eligendi iste dolorum aliquam. Ipsa atque eum commodi
              iusto, perspiciatis animi aliquam perferendis?
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "darkgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae officiis consectetur maxime, voluptate illo cum commodi
              eligendi. Eligendi iste dolorum aliquam. Ipsa atque eum commodi
              iusto, perspiciatis animi aliquam perferendis?
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "darkgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae officiis consectetur maxime, voluptate illo cum commodi
              eligendi. Eligendi iste dolorum aliquam. Ipsa atque eum commodi
              iusto, perspiciatis animi aliquam perferendis?
            </p>
            <button>Go</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Services;
