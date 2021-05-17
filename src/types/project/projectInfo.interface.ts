import { ProjectBase } from './projectBase.interface';

export interface ProjectInfo extends ProjectBase {
  projectFields: {
    priority: number;
    shortExcerpt: string;
    thumbImage: {
      sourceUrl: string;
      altText?: string;
    };
  };
}
