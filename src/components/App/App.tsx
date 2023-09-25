import React from 'react';
import {NavLink, Route, Routes} from 'react-router-dom';

import ScrollWrapper from '../Scroll-wrapper/Scroll-wrapper';
import Profile from '../Profile/Profile';
import Layout from '../Layout/Layout';

import './Style.scss';

const App = () => {
  return (
    <>
      <div className="main new">
        <Routes>
          <Route path={''} element={ <Layout/> }>
            <Route path={'Infinite-scroll'} element={ <div> Главная страница </div> }/>
            <Route path={'scroll-page'} element={ <ScrollWrapper/> } />
            <Route path={'profile/:id'} element={ <Profile/> } />
            <Route path={'profile'} element={ <Profile/> } />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

