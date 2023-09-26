import {ICardField} from '../Scroll-wrapper/Interface';
import {CSSProperties} from "react";

export interface ICard {
  data: ICardField;
  setCount: (value: number) => void;
  style?: CSSProperties;
  from: string
}