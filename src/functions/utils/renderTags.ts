import { NodeList } from '@/types/project/nodeList.interface';

export const renderTags = (nodeList: NodeList) => {
  const tags = nodeList.nodes.map(({ name }) => name);
  if (tags.length < 2) {
    return tags.map((tag) => `${tag} `);
  }
  const lastId = tags.length - 1;
  const lastItem = tags[lastId];
  return tags.map((tag) => (tag === lastItem ? `${tag} ` : `${tag}, `));
};
