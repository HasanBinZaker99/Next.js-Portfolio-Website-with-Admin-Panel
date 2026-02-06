"use client";
import { motion } from "framer-motion";
const defaultVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

export default function AnimationWrapper({
  children,
  className = "",
  variants = defaultVariants,
  viewportAmount = 0.5,
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: viewportAmount }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
