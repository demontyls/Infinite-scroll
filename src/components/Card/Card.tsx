import React, {FC} from 'react';
import { ICard } from './Interface';

import { Link } from 'react-router-dom';

import './Style.scss';

const Card:FC<ICard> = ( { data, style, from }) => {
  const { id, title, body} = data;

  return (
    <div className={`card custom-card py-2 px-3 d-flex flex-collumn ${Boolean(id % 2 ) && 'odd'}`} style={style}>
      <strong>{ id }</strong>
      <div className="name">{ title }</div>
      <div className="text-truncate text-body-tertiary">{ body }</div>
      <Link to={`/profile/${from}/${id}`} className="btn btn-primary btn-sm ms-md-auto">
        Перейти
      </Link>
    </div>
  );
};

export default Card;