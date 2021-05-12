import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import ButtonScroll from '@/components/common/ButtonScroll';
import Emoji from '@/components/common/Emoji';
import classes from './styles.module.css';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: `easeInOut`,
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const HomepageHeader: React.FC = () => (
  <motion.header
    className={`${classes.header} container-slim`}
    variants={container}
    initial="hidden"
    animate="show"
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={classes.imageWrapper}
      variants={item}
    >
      <Image
        priority
        src="/images/img-portrait.jpg"
        alt="portrait Paweł Trojnacki"
        width={100}
        height={100}
        className={classes.image}
      />
    </motion.div>
    <motion.p className={`${classes.subheading} mb-md`} variants={item}>
      Hi, I&apos;m Paweł{` `}
      <Emoji ariaLabel="greeting">🖐</Emoji>
    </motion.p>
    <motion.h1 className="heading-large mb-lg" variants={item}>
      I create websites and web applications using JavaScript, React and
      WordPress
    </motion.h1>
    <motion.div variants={item}>
      <ButtonScroll destinationId="portfolio">Check out my work</ButtonScroll>
    </motion.div>
  </motion.header>
);

export default HomepageHeader;
