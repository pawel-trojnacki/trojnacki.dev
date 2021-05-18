import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/containers/Reveal';
import classes from './styles.module.css';

interface Props {
  url: string;
  alt: string | undefined;
}

const ImageBlock: React.FC<Props> = ({ url, alt }) => (
  <Reveal variant="zoomIn">
    <div className={classes.image}>
      <Image
        src={url}
        alt={alt}
        layout="responsive"
        width={2000}
        height={1500}
      />
    </div>
  </Reveal>
);

export default ImageBlock;
