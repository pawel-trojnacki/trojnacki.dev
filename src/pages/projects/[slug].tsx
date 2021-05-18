import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPortfolioStaticPaths } from '@/functions/wordpress/getPortfolioStaticPaths';
import { getProjectStaticProps } from '@/functions/wordpress/getProjectStaticProps';
import { SingleProject } from '@/types/project/singleProject.interface';
import ProjectHeader from '@/components/organisms/ProjectHeader';

interface Props {
  project: SingleProject;
}

export const getStaticPaths: GetStaticPaths = (context) =>
  getPortfolioStaticPaths(context);

export const getStaticProps: GetStaticProps = (context) =>
  getProjectStaticProps(context);

const Project: React.FC<Props> = ({
  project: { title, projectFields, projectTypes, technologies, blocks },
}) => (
  <>
    <ProjectHeader
      title={title}
      projectFields={projectFields}
      projectTypes={projectTypes}
      technologies={technologies}
    />
    {/* <pre>{JSON.stringify(projectFields, null, 2)}</pre>
    <pre>{JSON.stringify(blocks, null, 2)}</pre> */}
  </>
);

export default Project;
