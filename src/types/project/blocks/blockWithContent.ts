import { BlockBase } from './blockBase.interface';
import { BlockTypes } from './blocksTypes.enum';

export interface BlockWithContent extends BlockBase {
  name: BlockTypes.Heading | BlockTypes.Paragraph;
  saveContent: string;
}
