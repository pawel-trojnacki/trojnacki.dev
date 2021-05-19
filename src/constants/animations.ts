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

export const animateContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: `easeInOut`,
      staggerChildren: 0.15,
    },
  },
};

export const animateItem: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const animateImage: Variants = {
  hidden: animateItem.hidden,
  visible: {
    ...animateItem.visible,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};
