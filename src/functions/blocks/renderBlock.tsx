import React from 'react';
import HeadingBlock from '@/components/blocks/HeadingBlock';
import ImageBlock from '@/components/blocks/ImageBlock';
import ParagraphBlock from '@/components/blocks/ParagraphBlock';
import { Block } from '@/types/project/blocks/block.type';
import { BlockTypes } from '@/types/project/blocks/blocksTypes.enum';
import GalleryBlock from '@/components/blocks/GalleryBlock';
import VideoBlock from '@/components/blocks/VideoBlock';

const renderBlock = (block: Block, id: number): React.ReactElement | null => {
  let loop = 1;
  const key = `${loop}${id}${block.name}`;
  switch (block.name) {
    case BlockTypes.Paragraph:
      return <ParagraphBlock key={key} content={block.saveContent} />;
    case BlockTypes.Heading:
      return <HeadingBlock key={key} content={block.saveContent} />;
    case BlockTypes.Image:
      return (
        <ImageBlock
          key={key}
          url={block.attributes.url}
          alt={block.attributes.alt}
        />
      );
    case BlockTypes.Gallery:
      return <GalleryBlock key={key} images={block.attributes.images} />;
    case BlockTypes.Video:
      return <VideoBlock key={key} url={block.attributes.src} />;
    case BlockTypes.Group:
      return (
        <section key={key} className="block-group">
          {block.innerBlocks.map((innerBlock, index) => {
            loop += 1;
            return renderBlock(innerBlock, index);
          })}
        </section>
      );
    default:
      return null;
  }
};

export default renderBlock;
