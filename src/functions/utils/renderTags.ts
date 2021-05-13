import { Taxonomy } from '@/types/project/taxonomy.interface';

interface NodeList {
  nodes: Taxonomy[];
}

export const renderTags = (nodeList: NodeList) => {
  const tags = nodeList.nodes.map(({ name }) => name);
  if (tags.length < 2) {
    return tags.map((tag) => `${tag} `);
  }
  const lastId = tags.length - 1;
  const lastItem = tags[lastId];
  return tags.map((tag) => (tag === lastItem ? `${tag} ` : `${tag}, `));
};
