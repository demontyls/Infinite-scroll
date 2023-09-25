import React, { FC, useEffect, useState } from 'react';
import { IProfile, IProfilePage } from './Interface';

import { Link, useParams } from 'react-router-dom';

import './Style.scss';

const Profile:FC<IProfilePage> = () => {
  const [profile, setProfile] = useState<IProfile | null>(null);
  const id = useParams().id;

  useEffect(()=> {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(( data:IProfile) => {
          setProfile(data);
        });
    }
  },[]);

  return (
    <>
        <div className="profile">
          <div className="profile__header">
            <Link to="/Infinite-scroll" className="btn btn-primary btn-sm">
              Назад
            </Link>
          </div>
          <div className="card p-2">
            { id ?
              <div>
                <h4>{ profile?.title }</h4>
                <p>{ profile?.body }</p>
              </div>
              :
              <div className="text-center p-3">
                Пусто
              </div>
            }
          </div>
        </div>
    </>
  );
};

export default Profile;