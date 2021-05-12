import { ProjectBase } from './projectBase.interface';

export interface ProjectInfo extends ProjectBase {
  projectFields: {
    shortExcerpt: string;
    thumbImage: {
      sourceUrl: string;
      altText?: string;
    };
  };
}
