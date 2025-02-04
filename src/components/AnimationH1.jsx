"use client";

import { motion } from "framer-motion";

const textVariants = {
  fade: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  },
  typing: (i) => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: i * 0.1 } },
  }),
  wave: (i) => ({
    animate: { y: [0, -10, 0] },
    transition: { repeat: Infinity, duration: 1, delay: i * 0.1 },
  }),
};

const AnimatedHeading = ({ text, animation = "fade", className = "" }) => {
  return (
    <motion.h1
      variants={textVariants[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className={`text-4xl font-bold ${className}`}>
      {animation === "typing" || animation === "wave"
        ? text.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={textVariants[animation]}
              custom={i}
              className="inline-block">
              {char}
            </motion.span>
          ))
        : text}
    </motion.h1>
  );
};

export default AnimatedHeading;
