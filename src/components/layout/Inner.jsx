"use client";
import React from "react";
import Header from "@/src/components/layout/Header";
import { motion } from "framer-motion";

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const Inner = ({ children }) => {
  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 1,
    },
  };

  const slide = {
    initial: {
      y: "100vh",
    },
    enter: {
      y: "100vh",
    },
    exit: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const perspective = {
    initial: {
      scale: 1,
      y: 0,
    },
    enter: {
      scale: 1,
      y: 0,
    },
    exit: {
      scale: 0.9,
      y: -150,
      opacity: 0.5,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className="inner">
      <motion.div {...anim(slide)} className="slide" />
      <motion.div {...anim(perspective)} className="page">
        <motion.div {...anim(opacity)}>
          <Header />
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Inner;
