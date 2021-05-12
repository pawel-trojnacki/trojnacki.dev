import { blockPartial } from './blocksPartial';

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
      }
      ${blockPartial}
    }
`;
