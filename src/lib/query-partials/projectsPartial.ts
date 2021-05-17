export const projectsPartial = `
    portfolio {
        nodes {
        slug
        id
        title
        projectFields {
            priority
            shortExcerpt
            thumbImage {
            sourceUrl
            altText
            }
        }
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
        }
    }
`;
