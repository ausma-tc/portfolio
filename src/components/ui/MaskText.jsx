'use client'
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const MaskText = ({ children }) => {
  const body = useRef(null);

  const isInView = useInView(body, { once: true, margin: "75%" });

  const animation = {
    initial: { y: "100%" },

    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div ref={body} className="overflow-hidden">
      <motion.p
        variants={animation}
        initial="initial"
        animate={isInView ? "enter" : ""}
      >
        {children}
      </motion.p>
    </div>
  );
};

export default MaskText;
