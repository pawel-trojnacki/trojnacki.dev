import { gql } from '@apollo/client';
import { singleProjectPartial } from './query-partials/singleProjectPartial';

export const projectPageQuery = gql`
  query ProjectPageQuery($id: ID!, $idType: ProjectIdType!) {
    ${singleProjectPartial}
  }
`;
