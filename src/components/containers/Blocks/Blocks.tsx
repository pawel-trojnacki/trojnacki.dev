import React from 'react';
import { Block } from '@/types/project/blocks/block.type';
import renderBlock from '@/functions/blocks/renderBlock';
import classes from './styles.module.css';

interface Props {
  blocks: Block[];
}

const Blocks: React.FC<Props> = ({ blocks }) => (
  <div className={`${classes.wrapper} container`}>
    {blocks.map((block, index) => renderBlock(block, index))}
  </div>
);

export default Blocks;
