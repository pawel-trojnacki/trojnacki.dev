import { Variants } from 'framer-motion';

interface RevealVariants {
  fadeIn: Variants;
  fadeUp: Variants;
  zoomIn: Variants;
}

export const revealVariants: RevealVariants = {
  fadeIn: {
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: `easeIn`, delay: 0.2 },
    },
    hidden: { opacity: 0 },
  },
  fadeUp: {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: `easeIn`, delay: 0.2 },
    },
    hidden: { opacity: 0, y: `5%` },
  },
  zoomIn: {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: `easeInOut`, delay: 0.2 },
    },
    hidden: { opacity: 0, scale: 0.9 },
  },
};
