import React, { FC, useEffect, useState } from 'react';
import { ICardField, IScrollWrapper } from './Interface';

import Card from '../Card/Card';
import Profile from '../Profile/Profile';

import './Style.scss';

const ScrollWrapper:FC<IScrollWrapper> = () => {
  const [entries, setEntries] = useState<ICardField[]>([]);
  const [profile, setProfile] = useState<ICardField | null>(null);
  const [count, setCount] = useState(1);
  const [isGet, setIsGet] = useState(true);
  let x = 1;

  const scroll = () => {
    const scrollOfTop = Math.trunc(window.pageYOffset);
    const windowHeight = window.innerHeight;
    const scrollHeight =  Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    if (scrollHeight - windowHeight - scrollOfTop <= 1) {
      x += 1;
      setCount(x);
      setIsGet(true);
    }
  };

  useEffect(()=> {
    document.addEventListener('scroll',scroll);
    return function () {
      document.removeEventListener('scroll', scroll)
    }
  }, []);

  useEffect(() => {
    if (isGet) {
      fetch(`https://jsonplaceholder.typicode.com/posts?_page=${count}&_limit=10`)
        .then(response => response.json())
        .then(( data:ICardField[]) => {
          if (!Boolean(entries.length)) {
            setEntries( data);
          } else {
            setEntries(entries.concat(data));
          }
          setIsGet(false);
        });
    }
  }, [count]);

  return (
    <>
      {profile ?
        <Profile data={profile} setProfile={setProfile} />
        :
        <div className="scroll-wrapper">
          {entries.map((card, i) => {
            return (
              <Card key={i} data={card} setProfile={setProfile} />
            )
          })}
        </div>
      }
    </>
  );
}

export default ScrollWrapper;
