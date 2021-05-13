import React from 'react';

interface Props {
  items: string[];
}

const Tags: React.FC<Props> = ({ items }) => (
  <>
    {items.map((item) => (
      <span key={item}>{item}</span>
    ))}
  </>
);

export default Tags;
