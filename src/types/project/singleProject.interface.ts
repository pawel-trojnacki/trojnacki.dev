import { Block } from './blocks/block.type';
import { ProjectBase } from './projectBase.interface';

export interface SingleProject extends ProjectBase {
  projectFields: {
    shortExcerpt: string;
    longExcerpt?: string;
    projectUrl: string;
    mainImage: {
      sourceUrl: string;
      altText?: string;
    };
  };
  blocks: Block[];
}
