import { Block } from './blocks/block.type';
import { ProjectBase } from './projectBase.interface';
import { ProjectInfo } from './projectInfo.interface';

export interface SingleProject extends ProjectBase {
  projectFields: {
    shortExcerpt: string;
    longExcerpt?: string;
    projectUrl: string;
    mainImage: {
      sourceUrl: string;
      altText?: string;
    };
    featured: ProjectInfo[];
  };
  blocks: Block[];
}
