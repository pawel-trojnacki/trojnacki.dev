import { BlockWithContent } from './blockWithContent';
import { BlockMedia } from './blockMedia.interface';
import { BlockGroup } from './blockGroup.interface';
import { BlockGallery } from './blockGallery.interface';
import { BlockImage } from './blockImage.interface';

export type Block =
  | BlockWithContent
  | BlockMedia
  | BlockImage
  | BlockGallery
  | BlockGroup;
