export interface BasicBookInfo {
  readonly id: string;
  readonly title: string;
  readonly authors: string[];
  readonly year: string;
  isDisabled?: boolean;
}