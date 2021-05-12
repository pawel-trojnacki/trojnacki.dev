import { BlockBase } from './blockBase.interface';
import { BlockTypes } from './blocksTypes.enum';

export interface BlockImage extends BlockBase {
  name: BlockTypes.Image;
  attributes: {
    url: string;
    alt?: string;
  };
}
