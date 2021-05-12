import { BlockBase } from './blockBase.interface';
import { BlockTypes } from './blocksTypes.enum';
import { BlockWithContent } from './blockWithContent';

export interface BlockGroup extends BlockBase {
  name: BlockTypes.Group;
  innerBlocks: BlockWithContent[];
}
