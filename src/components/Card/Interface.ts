import {ICardField} from '../Scroll-wrapper/Interface';

export interface ICard {
  data: ICardField;
  setProfile: (value: ICardField) => void
}