import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/containers/Reveal';
import classes from './styles.module.css';

interface Props {
  images: {
    url: string;
    alt: string | undefined;
  }[];
}

const GalleryBlock: React.FC<Props> = ({ images }) => (
  <div className={classes.gallery}>
    {images.map(({ url, alt }, id) => (
      <Reveal key={id} variant="zoomIn">
        <div>
          <Image
            src={url}
            alt={alt}
            layout="responsive"
            width={1200}
            height={800}
          />
        </div>
      </Reveal>
    ))}
  </div>
);

export default GalleryBlock;
