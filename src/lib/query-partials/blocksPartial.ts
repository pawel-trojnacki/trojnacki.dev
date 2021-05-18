export const blocksPartial = `
    blocks {
        name
        ... on CoreHeadingBlock {
        saveContent
        }
        ... on CoreParagraphBlock {
        saveContent
        }
        ... on CoreImageBlock {
        attributes {
            ... on CoreImageBlockAttributes {
            url
            alt
            }
        }
        }
        ... on CoreGalleryBlock {
        attributes {
            ... on CoreGalleryBlockAttributes {
            images {
                url
                alt
            }
            }
        }
        }
        ... on CoreVideoBlock {
        attributes {
            src
        }
        }
        ... on CoreGroupBlock {
        innerBlocks {
            ... on CoreParagraphBlock {
            name
            saveContent
            }
            ... on CoreHeadingBlock {
            saveContent
            name
            }
        }
        }
    }
`;
