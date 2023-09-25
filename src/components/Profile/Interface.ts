import {ICardField} from "../Scroll-wrapper/Interface";

export interface IProfile {
  data: ICardField;
  setProfile: (value: ICardField) => void
}