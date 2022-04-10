import { BookData } from '../../../models/book-data';

export type BookDataState = {
  data: BookData | null;
  isLoading: boolean;
}

export type LoadBookDataPayload = string;
export type LoadBookDataSuccessPayload = BookData;