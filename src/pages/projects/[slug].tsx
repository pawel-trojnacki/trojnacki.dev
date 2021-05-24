import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPortfolioStaticPaths } from '@/functions/wordpress/getPortfolioStaticPaths';
import { getProjectStaticProps } from '@/functions/wordpress/getProjectStaticProps';
import { SingleProject } from '@/types/project/singleProject.interface';
import ProjectHeader from '@/components/organisms/ProjectHeader';
import Section from '@/components/containers/Section';
import Grid from '@/components/organisms/Grid';
import Blocks from '@/components/containers/Blocks';
import Seo from '@/components/organisms/Seo';

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
    <Seo title={title} description={projectFields.shortExcerpt} />
    <ProjectHeader
      title={title}
      projectFields={projectFields}
      projectTypes={projectTypes}
      technologies={technologies}
    />
    <Blocks blocks={blocks} />
    {!!projectFields.featured && (
      <Section id="featured-projects" title="Other Projects">
        <Grid projects={projectFields.featured} />
      </Section>
    )}
  </>
);

export default Project;
