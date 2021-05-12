import { Taxonomy } from './taxonomy.interface';

export interface ProjectBase {
  slug: string;
  id: string;
  title: string;
  technologies: {
    nodes: Taxonomy[];
  };
  projectTypes: {
    nodes: Taxonomy[];
  };
}
