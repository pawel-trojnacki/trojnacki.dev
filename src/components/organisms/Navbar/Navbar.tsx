import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from '@/components/common/Link';
import classes from './styles.module.css';

const variants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: `easeInOut`,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const Navbar: React.FC = () => (
  <motion.nav
    className={`container ${classes.navbar}`}
    variants={variants}
    initial="hidden"
    animate="visible"
  >
    <ul className={classes.list}>
      <li className={classes.item}>
        <Link href="/" className={classes.link}>
          trojnacki.dev
        </Link>
      </li>
      <li className={classes.item}>
        <a href="mailto:trojnacki.p@outlook.com" className={classes.link}>
          Email
        </a>
      </li>
      <li className={classes.item}>
        <a href="https://github.com/pawel-trojnacki" className={classes.link}>
          Github
        </a>
      </li>
    </ul>
  </motion.nav>
);

export default Navbar;
