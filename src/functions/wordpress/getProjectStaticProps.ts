import { GetStaticProps } from 'next';
import client from '@/../apollo-client';
import { projectPageQuery } from '@/lib/projectPageQuery';

const idType = `SLUG`;

export const getProjectStaticProps: GetStaticProps = async (context) => {
  const {
    data: { project },
  } = await client.query({
    query: projectPageQuery,
    variables: {
      id: context.params?.slug,
      idType,
    },
  });

  return {
    props: {
      project,
    },
  };
};
