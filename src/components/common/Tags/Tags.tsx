import React from 'react';
import { renderTags } from '@/functions/utils/renderTags';
import { NodeList } from '@/types/project/nodeList.interface';

interface Props {
  list: NodeList;
}

const Tags: React.FC<Props> = ({ list }) => {
  const items = renderTags(list);
  return (
    <>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </>
  );
};

export default Tags;
