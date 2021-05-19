import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { revealVariants } from '@/constants/animations';

interface Props {
  variant: 'fadeIn' | 'fadeUp' | 'zoomIn';
}

const Reveal: React.FC<Props> = ({ children, variant }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start(`visible`);
    }
  }, [controls, inView]);

  return (
    <motion.div
      animate={controls}
      variants={revealVariants[variant]}
      initial="hidden"
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
