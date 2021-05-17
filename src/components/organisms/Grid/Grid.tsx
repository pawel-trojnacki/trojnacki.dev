import React from 'react';
import { ProjectInfo } from '@/types/project/projectInfo.interface';
import Card from '@/components/common/Card';
import { sortProjects } from '@/functions/utils/sortProjects';
import classes from './styles.module.css';

interface Props {
  projects: ProjectInfo[];
}

const Grid: React.FC<Props> = ({ projects }) => (
  <ul className={classes.grid}>
    {sortProjects(projects).map((project) => (
      <Card key={project.title} project={project} />
    ))}
  </ul>
);
export default Grid;
