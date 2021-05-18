import { projectInfoPartial } from './projectInfoPartial';

export const projectsPartial = `
    portfolio {
        nodes {
            ${projectInfoPartial}
        }
    }
`;
