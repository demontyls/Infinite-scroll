import React, {FC} from 'react';
import {IProfile} from './Interface';

import './Style.scss'

const Profile:FC<IProfile> = ({data, setProfile}) => {
  const {title, body} = data;
  return (
    <div className="profile">
      <div className="profile__header">
        <button className="btn btn-primary btn-sm" onClick={() => setProfile(null)}>
          Назад
        </button>
      </div>
      <div className="card p-2">
        <h4>{ title }</h4>
        <p>{ body }</p>
      </div>
    </div>
  );
};

export default Profile;