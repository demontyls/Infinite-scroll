import React, {FC} from 'react';
import { ICard } from './Interface';

import { Link } from 'react-router-dom';

import './Style.scss';

const Card:FC<ICard> = ( { data }) => {
  const { id, title, body} = data;

  return (
    <div id={String(id)} className="card custom-card py-2 px-3 d-flex flex-collumn">
      <strong>{ id }</strong>
      <div className="name">{ title }</div>
      <div className="text-truncate text-body-tertiary">{ body }</div>
      <Link to={`/profile/${id}`} className="btn btn-primary btn-sm ms-md-auto">
        Перейти
      </Link>
    </div>
  );
};

export default Card;