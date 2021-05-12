import { GetStaticPaths } from 'next';
import { projectListQuery } from '@/lib/projectListQuery';
import { ProjectInfo } from '@/types/project/projectInfo.interface';
import client from '@/../apollo-client';

export const getPortfolioStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: projectListQuery,
  });

  const projects: ProjectInfo[] = data.portfolio.nodes;

  const paths = projects.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
