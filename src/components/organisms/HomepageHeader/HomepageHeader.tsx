import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import ButtonScroll from '@/components/common/ButtonScroll';
import Emoji from '@/components/common/Emoji';
import classes from './styles.module.css';

const container: Variants = {
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

const item: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const HomepageHeader: React.FC = () => (
  <header className={`${classes.header} container`}>
    <motion.div
      className={classes.content}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.p className="subheading mb-md" variants={item}>
        Hi, I&apos;m Paweł{` `}
        <Emoji ariaLabel="greeting">🖐</Emoji>
      </motion.p>
      <motion.h1
        style={{ textAlign: `left` }}
        className="heading-large mb-lg"
        variants={item}
      >
        I create websites and web applications using JavaScript, React and
        WordPress
      </motion.h1>
      <motion.div variants={item}>
        <ButtonScroll destinationId="portfolio">Check out my work</ButtonScroll>
      </motion.div>
    </motion.div>
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={classes.imgWrapper}
    >
      <Image
        src="/images/hero-img.jpg"
        alt="Website mockups"
        width={1000}
        height={1200}
        objectFit="contain"
        objectPosition="center"
        className={classes.img}
        loading="eager"
        priority
      />
    </motion.div>
  </header>
);

export default HomepageHeader;
