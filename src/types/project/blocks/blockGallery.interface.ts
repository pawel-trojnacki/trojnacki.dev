import { BlockBase } from './blockBase.interface';
import { BlockTypes } from './blocksTypes.enum';

export interface BlockGallery extends BlockBase {
  name: BlockTypes.Gallery;
  attributes: {
    images: {
      url: string;
      alt?: string;
    }[];
  };
}
