import React from 'react';
import Reveal from '@/components/containers/Reveal';
import renderMarkup from '@/functions/blocks/renderMarkup';
import classes from './styles.module.css';

interface Props {
  content: string;
}

const HeadingBlock: React.FC<Props> = ({ content }) => (
  <Reveal variant="fadeUp">
    <div
      dangerouslySetInnerHTML={renderMarkup(content)}
      className={`${classes.heading} container-block subheading subheading-bold`}
    />
  </Reveal>
);

export default HeadingBlock;
