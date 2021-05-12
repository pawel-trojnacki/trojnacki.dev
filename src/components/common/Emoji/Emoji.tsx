import React from 'react';

interface Props {
  ariaLabel: string;
}

const Emoji: React.FC<Props> = ({ children, ariaLabel }) => (
  <span role="img" aria-label={ariaLabel}>
    {children}
  </span>
);

export default Emoji;
