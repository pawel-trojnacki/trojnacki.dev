import React from 'react';
import classes from './styles.module.css';

interface Props {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  variant?: 'contain' | 'cover';
}

const HeaderImage: React.FC<Props> = ({
  url,
  alt,
  width = 1600,
  height = 1200,
  variant = `cover`,
}) => (
  <img
    src={url}
    alt={alt}
    width={width}
    height={height}
    className={`${classes.img} ${classes[variant]}`}
  />
);

export default HeaderImage;
