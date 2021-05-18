import { blocksPartial } from './blocksPartial';
import { projectInfoPartial } from './projectInfoPartial';

export const singleProjectPartial = `
  project(id: $id, idType: $idType) {
      slug
      id
      title
      technologies {
        nodes {
          name
        }
      }
      projectTypes {
        nodes {
          name
        }
      }
      projectFields {
        shortExcerpt
        longExcerpt
        projectUrl
        mainImage {
          altText
          sourceUrl
        }
        featured {
          ... on Project {
            ${projectInfoPartial}
          }
        }
      }
      ${blocksPartial}
    }
`;
