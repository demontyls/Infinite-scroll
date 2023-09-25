import {ICardField} from '../Scroll-wrapper/Interface';

export interface ICard {
  data: ICardField;
  setCount: (value: number) => void;
}