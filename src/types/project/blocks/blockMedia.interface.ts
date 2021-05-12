import { BlockBase } from './blockBase.interface';
import { BlockTypes } from './blocksTypes.enum';

export interface BlockMedia extends BlockBase {
  name: BlockTypes.Video;
  attributes: {
    src: string;
  };
}
