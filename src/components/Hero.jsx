import "../styles/hero.css";
import museum from "../assets/images/museum-top-view.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <motion.p
          className="hero-tag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          DIGITAL MUSEUM EXPERIENCE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: .8 }}
        >
          AURUM
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: .8 }}
        >
          MUSEUM
        </motion.h2>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Where India's Past Shapes Tomorrow
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
        >
          Enter Aurum →
        </motion.button>

      </div>

      <motion.div
        className="museum-window"
        initial={{
          opacity: 0,
          width: 0
        }}
        animate={{
          opacity: 1,
          width: "420px"
        }}
        transition={{
          delay: .8,
          duration: 1.5
        }}
      >

        <img src={museum} alt="" />

      </motion.div>

    </section>
  );
}