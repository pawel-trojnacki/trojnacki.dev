import Reveal from '@/components/containers/Reveal';
import React from 'react';
import classes from './styles.module.css';

interface Props {
  large?: boolean;
  center?: boolean;
}

const Text: React.FC<Props> = ({ children, large = false, center = false }) => {
  const size = large ? `large` : ``;
  const centered = center ? classes.center : ``;
  return (
    <Reveal variant="fadeUp">
      <p className={`${classes.text} ${size} ${centered}`}>{children}</p>
    </Reveal>
  );
};

export default Text;
