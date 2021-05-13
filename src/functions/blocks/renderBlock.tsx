import Reveal from '@/components/containers/Reveal';
import { Block } from '@/types/project/blocks/block.type';
import { BlockTypes } from '@/types/project/blocks/blocksTypes.enum';

const renderBlock = (block: Block, id: number) => {
  let loop = 1;
  const key = `${loop}${id}${block.name}`;
  switch (block.name) {
    case BlockTypes.Paragraph:
      return <Reveal key={key} variant="fadeUp" markup={block.saveContent} />;
    case BlockTypes.Heading:
      return <Reveal key={key} variant="fadeUp" markup={block.saveContent} />;
    case BlockTypes.Image:
      return (
        <div key={key}>
          {` `}
          <img
            src={block.attributes.url}
            alt={block.attributes.alt}
            style={{ width: `200px`, height: `200px` }}
          />
        </div>
      );
    case BlockTypes.Gallery:
      return (
        <div key={key}>
          {block.attributes.images.map(({ url, alt }, imgId) => (
            <img
              key={imgId}
              src={url}
              alt={alt}
              style={{ width: `200px`, height: `200px` }}
            />
          ))}
        </div>
      );
    case BlockTypes.Video:
      return (
        <div key={key}>
          <video src={block.attributes.src} muted autoPlay loop />
        </div>
      );
    case BlockTypes.Group:
      return (
        <div key={key}>
          {block.innerBlocks.map((innerBlock, index) => {
            loop += 1;
            return renderBlock(innerBlock, index);
          })}
        </div>
      );
    default:
      return ``;
  }
};

export default renderBlock;
