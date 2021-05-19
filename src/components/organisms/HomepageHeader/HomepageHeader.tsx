import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  animateContainer,
  animateImage,
  animateItem,
} from '@/constants/animations';
import ButtonScroll from '@/components/common/ButtonScroll';
import Emoji from '@/components/common/Emoji';
import classes from './styles.module.css';

const HomepageHeader: React.FC = () => (
  <header className={`${classes.header} container`}>
    <motion.div
      className={classes.content}
      variants={animateContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.p className="subheading mb-md" variants={animateItem}>
        Hi, I&apos;m Paweł{` `}
        <Emoji ariaLabel="greeting">🖐</Emoji>
      </motion.p>
      <motion.h1
        style={{ textAlign: `left` }}
        className="heading-large mb-lg"
        variants={animateItem}
      >
        I create websites and web applications using JavaScript, React and
        WordPress
      </motion.h1>
      <motion.div variants={animateItem}>
        <ButtonScroll destinationId="portfolio">Check out my work</ButtonScroll>
      </motion.div>
    </motion.div>
    <motion.div
      variants={animateImage}
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
