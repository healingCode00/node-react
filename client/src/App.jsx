import React from 'react';
import { Route, Routes } from 'react-router';
import './app.css';
import { RecoilRoot } from 'recoil'

import Main from './pages/Main';

function App() {


  return (
    <RecoilRoot>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
    </RecoilRoot>
  )
}

export default App;
