import React from 'react';
import Reveal from '../Reveal';
import classes from './styles.module.css';

interface Props {
  id: string;
  title: string;
  slim?: boolean;
}

const Section: React.FC<Props> = ({ children, id, title, slim = false }) => (
  <section
    id={id}
    className={`${slim ? `container-slim` : `container`} ${classes.container}`}
  >
    <Reveal variant="fadeUp">
      <h2 className={classes.title}>{title}</h2>
    </Reveal>
    {children}
  </section>
);

export default Section;
