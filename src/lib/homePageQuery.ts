import { gql } from '@apollo/client';
import { projectsPartial } from './query-partials/projectsPartial';

export const homePageQuery = gql`
  query HomePageQuery {
    ${projectsPartial}
  }
`;
