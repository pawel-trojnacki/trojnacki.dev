import React from 'react';
import Reveal from '@/components/containers/Reveal';
import renderMarkup from '@/functions/blocks/renderMarkup';

interface Props {
  content: string;
}

const ParagraphBlock: React.FC<Props> = ({ content }) => (
  <Reveal variant="fadeUp">
    <div
      dangerouslySetInnerHTML={renderMarkup(content)}
      className="container-block large"
    />
  </Reveal>
);

export default ParagraphBlock;
