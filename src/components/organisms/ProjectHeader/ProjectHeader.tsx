import React from 'react';
import Image from 'next/image';
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
    <div className={classes.content}>
      <h1 className="subheading mb-md">{title}</h1>
      <p className="heading-large mb-md">{projectFields.shortExcerpt}</p>
      <p className="mb-xl">
        <Tags list={projectTypes} />
        {`| `}
        <Tags list={technologies} />
      </p>
      <a href={projectFields.projectUrl} className="btn">
        See online
      </a>
    </div>
    <div className={classes.imageWrapper}>
      <Image
        src={projectFields.mainImage.sourceUrl}
        alt={projectFields.mainImage.altText}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        className={classes.img}
      />
    </div>
  </header>
);

export default ProjectHeader;
