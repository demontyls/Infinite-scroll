import React, {FC} from 'react';
import { ICard } from './Interface';

import './Style.scss';

const Card:FC<ICard> = ( { data, setProfile}) => {
  const { id, title, body} = data;

  return (
    <div className="card custom-card py-2 px-3 d-flex flex-collumn">
      <strong>{ id }</strong>
      <div className="name">{ title }</div>
      <div className="text-truncate text-body-tertiary">{ body }</div>
      <a href="#" className="btn btn-primary btn-sm ms-md-auto" onClick={() => setProfile(data)}>
        Перейти
      </a>
    </div>
  );
};

export default Card;