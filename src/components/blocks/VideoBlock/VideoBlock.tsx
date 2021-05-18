import React from 'react';
import classes from './styles.module.css';

interface Props {
  url: string;
}

const VideoBlock: React.FC<Props> = ({ url }) => (
  <div className={classes.wrapper}>
    <video src={url} muted autoPlay loop controls />
  </div>
);

export default VideoBlock;
