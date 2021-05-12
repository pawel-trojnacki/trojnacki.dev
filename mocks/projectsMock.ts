import { ProjectInfo } from '@/types/project/projectInfo.interface';

export const projectsMock: ProjectInfo[] = [
  {
    id: `p1`,
    slug: `project1`,
    title: `First Project`,
    technologies: {
      nodes: [{ name: `PHP` }, { name: `React` }],
    },
    projectTypes: {
      nodes: [{ name: `Training Project` }],
    },
    projectFields: {
      shortExcerpt: `Lorem ipsum dolor sit amet. Dolor escur sic amet lescu rotre mondi. Lorem ipsum dolor sit amet.`,
      thumbImage: {
        sourceUrl: `https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png`,
        altText: `placeholder image`,
      },
    },
  },
  {
    id: `p2`,
    slug: `project2`,
    title: `Second Project`,
    technologies: {
      nodes: [{ name: `TS` }, { name: `React` }],
    },
    projectTypes: {
      nodes: [{ name: `Training Project` }],
    },
    projectFields: {
      shortExcerpt: `Lorem ipsum dolor sit amet. Dolor escur sic amet lescu rotre mondi. Lorem ipsum dolor sit amet.`,
      thumbImage: {
        sourceUrl: `https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png`,
        altText: `placeholder image`,
      },
    },
  },
  {
    id: `p3`,
    slug: `project3`,
    title: `Third Project`,
    technologies: {
      nodes: [{ name: `PHP` }, { name: `WordPress` }],
    },
    projectTypes: {
      nodes: [{ name: `Training Project` }],
    },
    projectFields: {
      shortExcerpt: `Lorem ipsum dolor sit amet. Dolor escur sic amet lescu rotre mondi. Lorem ipsum dolor sit amet.`,
      thumbImage: {
        sourceUrl: `https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png`,
        altText: `placeholder image`,
      },
    },
  },
  {
    id: `p4`,
    slug: `project4`,
    title: `Fourth Project`,
    technologies: {
      nodes: [{ name: `PHP` }, { name: `WordPress` }],
    },
    projectTypes: {
      nodes: [{ name: `Training Project` }],
    },
    projectFields: {
      shortExcerpt: `Lorem ipsum dolor sit amet. Dolor escur sic amet lescu rotre mondi. Lorem ipsum dolor sit amet.`,
      thumbImage: {
        sourceUrl: `https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png`,
        altText: `placeholder image`,
      },
    },
  },
];
