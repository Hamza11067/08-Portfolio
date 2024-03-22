import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Todo App",
    img: "/Todo.jpg",
    link: "https://todo-app-using-context-api.netlify.app/",
    docs: "I have created this todo app using reactjs and it's important concept called context api and also it has local storage in it. You can add, edit, toggle and delete your tasks. Even when you refresh or reopen your data will be saved.",
  },
  {
    id: 2,
    title: "Currency Converter",
    img: "/Currency-converter.jpg",
    link: "https://currency-converter-pk.netlify.app/",
    docs: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, deserunt eligendi! Iusto corrupti corporis, pariatur sequi autem optio officia officiis",
  },
  {
    id: 3,
    title: "React App",
    img: "/React-router.jpg",
    link: "https://my-react-routerr.netlify.app/",
    docs: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, deserunt eligendi! Iusto corrupti corporis, pariatur sequi autem optio officia officiis",
  }
];

const Single = ({ item }) => {
  const ref = useRef();
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="img-container" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="text-container">
            <h2>{item.title}</h2>
            <p>{item.docs}</p>
             <a href={item.link} target="_blank" rel="noopener noreferrer">
                See Demo
              </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const progressBarWidth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    from: 1, // starting width
    to: 0, // ending width
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: progressBarWidth }}
          className="progress-bar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Portfolio;

