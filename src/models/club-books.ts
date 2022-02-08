import { BasicUserInfo } from './basic-user-info';
import { BasicBookInfo } from './basic-book-info';

export interface ClubBooks {
  readonly user: BasicUserInfo;
  readonly books: BasicBookInfo[];
}