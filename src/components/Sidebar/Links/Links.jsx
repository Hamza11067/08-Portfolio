import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.12,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

function Links({ setOpen }) {
  const items = ["Services", "Portfolio", "Github", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
      <Link to="" onClick={() => setOpen((prev) => !prev)}  >Home</Link>
      </motion.div>
      {items.map((item) => (
        <motion.div
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to={`${item}`} onClick={() => setOpen((prev) => !prev)}  >{item}</Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Links;
