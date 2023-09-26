import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ScrollWrapper from '../Scroll-wrapper/Scroll-wrapper';
import Profile from '../Profile/Profile';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';

import './Style.scss';

const App = () => {
  return (
    <>
      <div className="main new">
        <Routes>
          <Route path={''} element={ <Layout/> }>
            <Route path={'Infinite-scroll'} element={ <Main /> }/>
            <Route path={'scroll-page'} element={ <ScrollWrapper/> } />
            <Route path={'profile/:from/:id'} element={ <Profile/> } />
            <Route path={'profile'} element={ <Profile/> } />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

