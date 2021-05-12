import { gql } from '@apollo/client';
import { projectsPartial } from './query-partials/projectsPartial';

export const projectListQuery = gql`
  query ProjectListQuery {
    ${projectsPartial}
  }
`;
