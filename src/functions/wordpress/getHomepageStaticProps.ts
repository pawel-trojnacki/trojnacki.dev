import { GetStaticProps } from 'next';
import client from '@/../apollo-client';
import { homePageQuery } from '@/lib/homePageQuery';

export const getHomePageStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: homePageQuery,
  });

  return {
    props: {
      projects: data.portfolio.nodes,
    },
  };
};
