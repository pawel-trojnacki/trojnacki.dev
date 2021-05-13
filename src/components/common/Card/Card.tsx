import React from 'react';
import Image from 'next/image';
import { ProjectInfo } from '@/types/project/projectInfo.interface';
import { renderTags } from '@/functions/utils/renderTags';
import Reveal from '@/components/containers/Reveal';
import Link from '../Link';
import classes from './styles.module.css';
import Tags from '../Tags';

interface Props {
  project: ProjectInfo;
}

const Card: React.FC<Props> = ({
  project: { title, slug, projectFields, technologies, projectTypes },
}) => {
  const projectTypesItems = renderTags(projectTypes);
  const techonologiesItems = renderTags(technologies);
  return (
    <li>
      <Reveal variant="zoomIn">
        <Link href={`/projects/${slug}`}>
          <div className={classes.imageWrapper}>
            <Image
              src={projectFields.thumbImage.sourceUrl}
              alt={projectFields.thumbImage.altText || title}
              layout="responsive"
              width={1000}
              height={600}
              objectFit="cover"
              objectPosition="center"
              className={classes.image}
            />
          </div>
        </Link>
      </Reveal>
      <Reveal variant="fadeIn">
        <Link href={`/projects/${slug}`}>
          <h3 className={classes.title}>{title}</h3>
        </Link>
        <p className={classes.paragraph}>{projectFields.shortExcerpt}</p>
        <p className={classes.tags}>
          <Tags items={projectTypesItems} /> |{` `}
          <Tags items={techonologiesItems} />
        </p>
      </Reveal>
    </li>
  );
};

export default Card;
