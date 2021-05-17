import React from 'react';
import { motion, Variants } from 'framer-motion';
import classes from './styles.module.css';

interface Props {
  variant?: 'error' | 'success';
  withStringChild?: boolean;
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: `10px`,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: `linear` },
  },
};

const Feedback: React.FC<Props> = ({ children, variant = `error` }) => (
  <motion.div
    variants={variants}
    initial="hidden"
    animate="visible"
    role="alert"
    className={`${classes.feedback} ${classes[variant]}`}
  >
    {children}
  </motion.div>
);

export default Feedback;
