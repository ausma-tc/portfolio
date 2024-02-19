"use client";
import { motion } from "framer-motion";

const Template = ({ children }) => {
  const anim = (variants, custom) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom
    };
  };

  const expand = {
    initial: {
      top: 0,
    },
    enter: (i) => ({
      top: "100%",
      transition: {
        duration: 0.4,
        delay: 0.2 * 1
      },
      transitionEnd: {
        height: 0,
        top: 0
      }
    }),
    exit: (i) => ({
      height: "100%",
      transition: {
        duration: 0.4,
        delay: 0.5 * 1
      }
    })
  };

  const overlay = {
    initial: {
      opacity: 0.5
    },
    enter: {
      opacity: 0
    },
    exit: {
      opacity: 0.5
    }
  }

  const nbOfColumns = 10;

  return (
    <div className="page stairs">
      <motion.div {...anim(overlay)} className="transition-background" />
      <div className="transition-container">
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />;
        })}
      </div>
      {children}
    </div>
  );
};

export default Template;
