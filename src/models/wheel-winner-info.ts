import { BasicUserInfo } from './basic-user-info';
import { BasicBookInfo } from './basic-book-info';

export interface WheelWinnerInfo {
  user: BasicUserInfo;
  book: BasicBookInfo;
  userIndex: number;
  bookIndex: number;
}