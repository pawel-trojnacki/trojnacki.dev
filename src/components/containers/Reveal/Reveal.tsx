import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import renderMarkup from '@/functions/blocks/renderMarkup';
import { revealVariants } from './revealVariants';

interface Props {
  variant: 'fadeIn' | 'fadeUp' | 'zoomIn';
  markup?: string | null;
}

const Reveal: React.FC<Props> = ({ children, variant, markup }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start(`visible`);
    }
  }, [controls, inView]);

  if (markup) {
    return (
      <motion.div
        animate={controls}
        variants={revealVariants[variant]}
        initial="hidden"
        ref={ref}
        dangerouslySetInnerHTML={renderMarkup(markup)}
      />
    );
  }

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
