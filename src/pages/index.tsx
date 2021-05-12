import React from 'react';
import { GetStaticProps } from 'next';
import { getHomePageStaticProps } from '@/functions/wordpress/getHomepageStaticProps';
import { ProjectInfo } from '@/types/project/projectInfo.interface';

interface Props {
  projects: ProjectInfo[];
}

export const getStaticProps: GetStaticProps = (context) =>
  getHomePageStaticProps(context);

const Home: React.FC<Props> = ({ projects }) => (
  <div>
    <h1>Hello World</h1>
    <pre>{JSON.stringify(projects, null, 2)}</pre>
  </div>
);

export default Home;
