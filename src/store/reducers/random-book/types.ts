import { BookData } from '../../../models/book-data';

export interface RandomBookState {
  data: BookData | null;
  isLoading: boolean;
  isConfirming: boolean;
}

export type LoadRandomBookSuccessPayload = BookData;
export type ConfirmRandomBookPayload = BookData;