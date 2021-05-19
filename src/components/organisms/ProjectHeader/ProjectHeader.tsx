import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  animateContainer,
  animateImage,
  animateItem,
} from '@/constants/animations';
import { SingleProject } from '@/types/project/singleProject.interface';
import Tags from '@/components/common/Tags';
import classes from './styles.module.css';

type Props = Pick<
  SingleProject,
  'title' | 'projectFields' | 'projectTypes' | 'technologies'
>;

const ProjectHeader: React.FC<Props> = ({
  title,
  projectFields,
  projectTypes,
  technologies,
}) => (
  <header className={`${classes.header} container`}>
    <motion.div
      className={classes.content}
      variants={animateContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="subheading mb-md" variants={animateItem}>
        {title}
      </motion.h1>
      <motion.p className="heading-large mb-md" variants={animateItem}>
        {projectFields.shortExcerpt}
      </motion.p>
      <motion.div variants={animateItem}>
        <p className="mb-xl">
          <Tags list={projectTypes} />
          {`| `}
          <Tags list={technologies} />
        </p>
        <a href={projectFields.projectUrl} className="btn">
          See online
        </a>
      </motion.div>
    </motion.div>
    <motion.div
      className={classes.imageWrapper}
      variants={animateImage}
      initial="hidden"
      animate="visible"
    >
      <Image
        src={projectFields.mainImage.sourceUrl}
        alt={projectFields.mainImage.altText}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        loading="eager"
        priority
        className={classes.img}
      />
    </motion.div>
  </header>
);

export default ProjectHeader;
