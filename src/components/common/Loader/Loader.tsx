import React from 'react';
import classes from './styles.module.css';

const Loader: React.FC = () => (
  <div className={classes.wrapper}>
    {` `}
    <div className={classes.loader} />
  </div>
);

export default Loader;
